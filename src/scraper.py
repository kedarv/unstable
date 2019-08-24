import requests
import json
from bs4 import BeautifulSoup
import json
import shutil
import os

BASE_URL = 'https://unstableunicorns.fandom.com'
GAMES = ['Base_Game']
json_data = []

for game in GAMES:
    result = requests.get(BASE_URL + '/wiki/' + game)
    soup = BeautifulSoup(result.content, features="html.parser")
    cards_list = soup.find_all('table', class_='article-table')[0].find_all('tr')
    for card in cards_list[1:-1]:
        card_href = card.find('a').attrs['href']
        url_to_follow = BASE_URL + card_href
        card_result = requests.get(url_to_follow)
        card_soup = BeautifulSoup(card_result.content, features="html.parser")
        img_url = card_soup.find('figure').find('a').attrs['href']
        
        data = card_soup.find_all('div', class_='pi-data-value')
        card_text = data[0].text
        card_type = data[1].text
        card_quantity = data[2].text
        card_deck = data[3].text

        img_name = card_href.split('/')[2]
        card_img_path = '../public/card_images/' + img_name + '.png'
        if not os.path.isfile(card_img_path):
            img_response = requests.get(img_url, stream=True)
            with open(card_img_path, 'wb') as out_file:
                shutil.copyfileobj(img_response.raw, out_file)

        data_dict = {
            'name':  card.find('td').text.rstrip(),
            'img': img_name + '.png',
            'text': card_text,
            'type': card_type,
            'quantity': card_quantity,
            'deck': card_deck,
        }
        json_data.append(data_dict)
        print(json_data)
    
    with open('data.json', 'w', encoding='utf-8') as f:
        json.dump(json_data, f, ensure_ascii=False, indent=4)