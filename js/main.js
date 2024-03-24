const app = {
    data(){
        return{
            currentPage: 'О нас',
            lastPage: 'О нас',
            currentSlideIndex: 0,
            slides:[
                {id:0, img:'./media/images/shutter_island.png', name: 'Остров проклятых'},
                {id:1, img:'./media/images/the_Sixth_Sense.png', name: 'Шестое чувство'},
                {id:2, img:'./media/images/fight_club.png', name: 'Бойцовский клуб'},
                {id:3, img:'./media/images/kimetsu_no_yaiba.png', name: 'крд: Бесконечный поезд'},
                {id:4, img:'./media/images/in_bruges.png', name: 'Залечь на дно в Брюгге'},
            ],
            products:[
                {id:0, img:'./media/images/shutter_island.png', genre: ['Игры разума', 'Все'], name: 'Остров проклятых', yearOfCreation: 2009, price: 300, rating:8.5,description:'Два американских судебных пристава отправляются на один из островов в штате Массачусетс, чтобы расследовать исчезновение пациентки клиники для умалишенных преступников. При проведении расследования им придется столкнуться с паутиной лжи, обрушившимся ураганом и смертельным бунтом обитателей клиники.'},
                {id:1, img:'./media/images/the_Sixth_Sense.png', genre: ['Игры разума', 'Все'],name: 'Шестое чувство', yearOfCreation: 1999, price: 200, rating:8.2,description:'Детский психиатр Малкольм Кроу сталкивается со странным случаем: девятилетнего Коула посещают страшные видения - призраки умерших. Все эти люди когда-то были убиты, и теперь они обрушивают на малыша свой гнетущий страх и отчаянный гнев. Как врач Малкольм бессилен помочь. Но как человек он пытается найти ключ к ужасному миру Коула, в котором веет дыханием смерти, и распускаются страшные цветы боли.'},
                {id:2, img:'./media/images/fight_club.png', genre: ['Игры разума', 'Все'], name: 'Бойцовский клуб', yearOfCreation: 1999, price: 350, rating:8.6,description:'Сотрудник страховой компании страдает хронической бессонницей и отчаянно пытается вырваться из мучительно скучной жизни. Однажды в очередной командировке он встречает некоего Тайлера Дёрдена — харизматического торговца мылом с извращенной философией. Тайлер уверен, что самосовершенствование — удел слабых, а единственное, ради чего стоит жить, — саморазрушение. Проходит немного времени, и вот уже новые друзья лупят друг друга почем зря на стоянке перед баром, и очищающий мордобой доставляет им высшее блаженство. Приобщая других мужчин к простым радостям физической жестокости, они основывают тайный Бойцовский клуб, который начинает пользоваться невероятной популярностью.'},
                {id:3, img:'./media/images/kimetsu_no_yaiba.png', genre: ['Аниме', 'Все'], name: 'крд: Бесконечный поезд', yearOfCreation: 2020, price: 500, rating: 7.9,description:'Завершив оздоровительные тренировки в Доме бабочки, Тандзиро и его друзья отправляются выполнять новое задание. На поезде «Бесконечный» творится что-то неладное: в одночасье там исчезает более 40 человек! А значит, Тандзиро, Нэдзуко, Иносукэ и Дзэницу предстоит сразиться с могущественным демоном. Присоединившись к одному из сильнейших мечников, пламенному столпу Кёдзюро Рэнгоку, герои бросают вызов врагу, в то время как поезд «Бесконечный» мчится в долину отчаяния.'},
                {id:4, img:'./media/images/in_bruges.png', genre: ['Комедия', 'Все'], name: 'Залечь на дно в Брюгге', yearOfCreation: 2007, price: 120, rating: 7.8,description:'После того, как наемные убийцы Рэй и Кен запороли в Лондоне важное задание, их злобный шеф Гарри приказывает им отправиться в Брюгге и не высовываться. Оказавшись в старинном бельгийском городке, Рэй от нечего делать флиртует с местной красоткой, пока Кен наслаждается жизнью и неожиданным отпуском. Кажется, ничто не предвещает беду в спокойном городе...'},
                {id:5, img:'./media/images/1+1.png', genre: ['Комедия', 'Все'], name: '1+1', yearOfCreation: 2011, price: 150, rating: 8.8,description: 'Пострадав в результате несчастного случая, богатый аристократ Филипп нанимает в помощники человека, который менее всего подходит для этой работы, – молодого жителя предместья Дрисса, только что освободившегося из тюрьмы. Несмотря на то, что Филипп прикован к инвалидному креслу, Дриссу удается привнести в размеренную жизнь аристократа дух приключений.'},
                {id:6, img:'./media/images/knives_out.png', genre: ['Игры разума', 'Комедия', 'Все'],name: 'Достать ножи', yearOfCreation: 2019, price: 250, rating: 8.0,description: 'На следующее утро после празднования 85-летия известного автора криминальных романов Харлана Тромби виновника торжества находят мёртвым. Налицо — явное самоубийство, но полиция по протоколу опрашивает всех присутствующих в особняке членов семьи, хотя, в этом деле больше заинтересован частный детектив Бенуа Блан. Тем же утром он получил конверт с наличными от неизвестного и заказ на расследование смерти Харлана. Не нужно быть опытным следователем, чтобы понять, что все приукрашивают свои отношения с почившим главой семейства, но Блану достаётся настоящий подарок — медсестра покойного, которая физически не выносит ложь.'},
                {id:7, img:'./media/images/the_dawn_wall.png', genre: ['Документальный фильм', 'Все'],name: 'Стена рассвета', yearOfCreation: 2017, price: 120, rating: 8.3,description: 'История о том, как американский альпинист Томми Колдуэлл, пытаясь отвлечься от горя, вместе с напарником Кевином Йоргенсоном решает покорить скалу Стена рассвета, высотой 3000 футов.'},
            ],
            filterCategories:[
                {id: 0, name: 'Все'},
                {id: 1, name: 'Игры разума'},
                {id: 2, name: 'Аниме'},
                {id: 3, name: 'Комедия'},
                {id: 4, name: 'Документальный фильм'},
            ],
            currentProduct: {},
            filterTypeIndex: 0,
            sortType: 'цене',
            sortMenuEnable: false,
            basketIdCount: 0,
            messageWindowEnable: false,
            messageWindowText: 'Вы добавили товар!',
            messageColor: 'black',
            users:[
                {id:0, login: 'ak', password: '123', email: 'ak@mail.ru', isAdmin: true, name: 'Амиран', surname: 'Калицов', patronymic: 'Иналович', basket:[], orders:[]},
                {id:1, login: 'qw', password: '123', email: 'qwerty@mail.ru', isAdmin: false, name: 'Масленников', surname: 'Семён', patronymic: 'Даниилович', basket:[], orders:[]},
                {id:2, login: 'zx', password: '321', email: 'zx@mail.ru', isAdmin: false, name: 'Воронина', surname: 'Милана', patronymic: 'Елисеевна', basket:[], orders:[]},
            ],
            orders:[],
            orderPageTitle: 'Заказ оформлен!',
            currentUser: null,
            whichUserOrders: null,
            currentOrderIndex: 0,
            registrationLoginField:'',
            registrationEmailField:'',
            registrationPasswordField:'',
            registrationPasswordRepeatField:'',
            registrationNameField:'',
            registrationSurnameField:'',
            registrationPatronymicField:'',
            registrationCheckBox: false,
            loginLoginField:'',
            loginPasswordField:'',
        }
    },
    methods:{
        ChangePage(page){ // смена страницы
            this.lastPage = this.currentPage
            this.currentPage = page
            this.Massege('Вы перешли на страницу: ' + this.currentPage)
        },
        ArraySum(arr, key){
            let sum = 0
            arr.forEach(element => sum += element[key])
            return sum
        },
        ArrayMax(arr, key){
            let max = 0;
            arr.forEach(elem => {
                if(elem[key] > max) max = elem[key]
            });
            return max
        },
        DetailEnable(id){ //включение детальной
            this.currentProduct = this.products.find(item => item.id === id)
            this.currentPage = 'Детальный обзор'
        },
        ProductsFilter(arr){ // фильтрация продуктов
            if(this.filterTypeIndex === 0) return arr
            else if(this.filterTypeIndex !== 0) return arr.filter(item => item.genre.includes(this.filterCategories[this.filterTypeIndex].name))
        },
        ProductsSort(arr){ // сортировка продуктов
            if(this.sortType === 'цене') return arr.sort((a,b) => a.price - b.price)
            else if(this.sortType === 'наименованию') return arr.sort((a,b) => a.name > b.name ? 1 : -1)
            else if(this.sortType === 'году производства') return arr.sort((a,b) => a.yearOfCreation - b.yearOfCreation)
        },
        BasketAdd(product){ // добавление в корзину
            if(!this.currentUser)
            {
                this.ChangePage('Авторизация')
                this.Massege('Чтобы добавить товар в корзину, войдите!', true)
                return
            }

            if(this.currentUser.basket.includes(product))
            {
                this.Massege('Товар уже есть в корзине!')
                return
            }

            if(this.currentUser.orders.find(order => order.content.includes(product)))
            {
                this.Massege('Товар уже есть в заказах!')
                return
            }

            this.currentUser.basket.push(product)
            this.Massege('Вы добавили товар!')
        },
        BasketDelete(product){ // удаление из корзины
            this.currentUser.basket = this.currentUser.basket.filter(item => item != product)
            this.Massege('Вы удалили товар!')
        },
        Bye(){
            this.currentUser.orders.push({id: this.ArrayMax(this.currentUser.orders, 'id')+1, userId: this.currentUser.id, content: this.currentUser.basket, status: 'на рассмотрении'})
            this.currentUser.basket = []
            this.OrderReveal(this.currentUser, this.currentUser.orders.length)
        },
        OrderReveal(user, index){
            this.currentOrderIndex = index
            this.whichUserOrders = user
            this.ChangePage('Оформление заказа')
        },
        Massege(text, isError = false){
            if(isError) this.messageColor = 'brown'
            else this.messageColor = 'black'
            this.messageWindowText = text
            this.messageWindowEnable = true
        },
        OnLogin(){
            if(this.loginLoginField === '' || this.loginPasswordField === '') 
            {
                this.Massege('Вы не заполнили одно или несколько полей!', true)
                return
            }

            let user = this.users.find(user => user.login === this.loginLoginField)
            
            if(user) {
                if(user.password === this.loginPasswordField) this.SingIn(user)
            }
            else this.Massege('Не правильный пароль или логин!', true)
        },
        SingIn(user){
            this.CleanFields()
            this.currentUser = user
            this.whichUserOrders = user
            this.ChangePage('Личный кабинет')
        },
        OnRegistration(){
            let newUser = {
                id: this.ArrayMax(this.users, 'id')+1,
                login: this.registrationLoginField,
                password: this.registrationPasswordField,
                email: this.registrationEmailField,
                isAdmin: false,
                name: this.registrationNameField,
                surname: this.registrationSurnameField,
                patronymic: this.registrationPatronymicField,
                basket: []
            }
            if(newUser.login === '' || newUser.password === '' || newUser.email === '' || newUser.name === '' || newUser.surname === '' || newUser.patronymic === '') 
            {
                this.Massege('Вы не заполнили одно или несколько полей!', true)
                return
            }

            if(!this.registrationCheckBox)
            {
                this.Massege('Для продолжения Нужно соглашение с правилами использования!', true)
                return
            }

            if(this.users.find(user => user.email === newUser.email))
            {
                this.Massege('На данную почту уже зарегистрирован пользователь!', true)
                return
            }

            if(this.users.find(user => user.login === newUser.login))
            {
                this.Massege('Уже существует пользователь с таким ником, придумайте другой', true)
                return
            }

            if(newUser.password !== this.registrationPasswordRepeatField)
            {
                this.Massege('Пароли не совпадают!', true)
                this.registrationPasswordField = ''
                this.registrationPasswordRepeatField = ''
                return
            }

            this.users.push(newUser)

            this.SingIn(this.users[this.users.length-1])
        },
        LogOut(){
            this.ChangePage('О нас')
            this.currentUser = null
        },
        CleanFields(){
            this.registrationLoginField = ''
            this.registrationEmailField = ''
            this.registrationPasswordField = ''
            this.registrationPasswordRepeatField = ''
            this.registrationNameField = ''
            this.registrationSurnameField = ''
            this.registrationPatronymicField = ''
            this.registrationCheckBox = false
            this.loginLoginField = ''
            this.loginPasswordField = ''
        },
        CreateProduct(){
            // {id:0, img:'' genre:['Игры разума', 'Все'] name:'' yearOfCreation: price: rating: description:''}
        }
    }
}

Vue.createApp(app).mount('#app')