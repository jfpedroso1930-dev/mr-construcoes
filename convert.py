import glob
from bs4 import BeautifulSoup
import re

with open('index.html', 'r', encoding='utf-8') as f:
    index_soup = BeautifulSoup(f.read(), 'html.parser')
    
header_html = str(index_soup.find('header'))
footer_html = str(index_soup.find('footer'))

for file in glob.glob('*.html'):
    if file == 'index.html': continue
    
    with open(file, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')
        
    # replace head links
    head = soup.find('head')
    if head:
        for link in head.find_all('link', rel='stylesheet'):
            link.decompose()
        # Add the new font and style
        new_fonts = BeautifulSoup("""
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Outfit:wght@200;300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="style.css">
        """, 'html.parser')
        head.append(new_fonts)
        
    # Replace header and footer, top-bar
    if soup.find('header'): soup.find('header').decompose()
    if soup.find('footer'): soup.find('footer').decompose()
    if soup.find(class_='top-bar'): soup.find(class_='top-bar').decompose()
    
    body = soup.find('body')
    if body:
        body.insert(0, BeautifulSoup(header_html, 'html.parser'))
        body.append(BeautifulSoup(footer_html, 'html.parser'))
        
        # add script.js
        for script in soup.find_all('script'):
            if 'main.js' in script.get('src', ''):
                script['src'] = 'script.js'
        
        # fix inline styles and apply generic classes
        for tag in body.find_all(True):
            if 'style' in tag.attrs:
                del tag['style']
                
            classes = tag.get('class', [])
            if 'section-tag' in classes:
                classes.remove('section-tag')
                classes.append('section-label')
                tag['class'] = classes
                
            if 'container' in classes:
                tag['style'] = "max-width: var(--max-width); margin: 0 auto; padding: 0 var(--gutter);"
                
            # change h1 to hero styling if it's the page title
            if tag.name == 'h1' and not tag.get('class'):
                tag['class'] = ['reveal']
                tag['style'] = "font-family: var(--font-serif); font-size: var(--text-hero); margin-top: 150px; text-align: center; color: var(--ink);"

            # Add reveal to main headings
            if tag.name in ['h2', 'h3'] and 'reveal' not in classes:
                classes.append('reveal')
                tag['class'] = classes
                
    with open(file, 'w', encoding='utf-8') as f:
        f.write(str(soup))
