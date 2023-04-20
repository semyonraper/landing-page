const translateButton = document.getElementById('translate')


function initTranslate() {
    toggleTranslate('Home','Главная','Home')
    toggleTranslate('About','О фурфуриках','About')
    toggleTranslate('Contact','Контакты','Contact')
    toggleTranslate('main-heading','Я АЛЛА РУСНАЧЕНКО','I AM ALLA RUSNACHENKO')
    toggleTranslate('andimaketoys','И Я ДЕЛАЮ ИГРУШКИ','AND I MAKE TOYS')
    toggleTranslate('about-section','Немного обо мне','A few details about myself')
    toggleTranslate('about-section1','Немного текста о том, кто мы и чем занимаемся.','Some text about who we are and what we do.')
    toggleTranslate('about-section2','Кстати, измените размер окна браузера, чтобы увидеть, что эта страница адаптивна.','Resize the browser window to see that this page is responsive by the way.')
    toggleTranslate('muw1','мои работы','my works')




    toggleTranslate('bunny','Фурфурик-зайчик,','Furfurik-bunny,')
    toggleTranslate('bunny2','очень милый и мягкий','very cute and soft')
    toggleTranslate('fur1','О фурфуриках','About furfuries')
    toggleTranslate('fur2','И что они собой представляют.','And what they are.')
    toggleTranslate('fur3','Привет! Мы, фурфурики. Фурфурик не просто новогодняя игрушка. Каждый создан индивидуально руками фуфурмамы. Сделав такой подарок близким или себе, вы получаете милого малыша, который будет с каждым годом приобретать ценность. Ценность воспоминаний. Фурфурик будет с вами долгие годы. Помните самую любимую игрушку на ёлке в детстве, в родительском доме или в доме бабушки?! Фурфурики именно такие, оживают в ваших руках, в вашем доме. Чудеса гораздо ближе, просто позвольте себе в них верить!','Hello! We are furfuries. Furfurik is not just a New Years toy.Each is created individually by Furfurmamas hands.Having made such a gift to your loved ones or yourself, you get a cute baby who will gain value every year.The value of memories. Furfurik will be with you for many years.Remember the most favorite toy on the Christmas tree as a child, in your parents house or in your grandmothers house?!Furfuriki are just like that, they come to life in your hands, in your house. Miracles are much closer, just allow yourself to believe in them!')
    toggleTranslate('alitle','немного больше о','a little more about')
    toggleTranslate('alitle2','фурфуриках:','furfuriks:')
    toggleTranslate('toys','шерстяные игрушки','wool toys')
    toggleTranslate('toys2','ватные игрушки','cotton toys')
    toggleTranslate('toys3','комбинированные игрушки','combination toys')


}

translateButton?.addEventListener('click',initTranslate)


function toggleTranslate(id, ruText,engText) {
    const element = document.getElementById(id);
    if(element) {
        element.innerText = element.innerText == ruText ? engText : ruText;
    }
}

