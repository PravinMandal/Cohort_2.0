let info = [
            {
                image: "./Assests/01.png",
                name: "Zenitsu Agatsuma",
                popularity: "2M",
                energy: 82,
                level: 4
            },
            {
                image: "./Assests/02.png",
                name: "Naruto Uzumaki",
                popularity: "10M",
                energy: 95,
                level: 9
            },
            {
                image: "./Assests/03.png",
                name: "Ichigo Kurosaki",
                popularity: "8M",
                energy: 90,
                level: 8
            },
            {
                image: "./Assests/04.png",
                name: "Goku",
                popularity: "15M",
                energy: 100,
                level: 10
            },
            {
                image: "./Assests/05.png",
                name: "Monkey D. Luffy",
                popularity: "12M",
                energy: 97,
                level: 9
            },
            {
                image: "./Assests/06.png",
                name: "Eren Yeager",
                popularity: "9M",
                energy: 88,
                level: 8
            },
            {
                image: "./Assests/07.png",
                name: "Satoru Gojo",
                popularity: "11M",
                energy: 99,
                level: 10
            },
            {
                image: "./Assests/08.png",
                name: "Light Yagami",
                popularity: "7M",
                energy: 85,
                level: 7
            },
            {
                image: "./Assests/09.png",
                name: "Tanjiro Kamado",
                popularity: "6M",
                energy: 92,
                level: 8
            }
        ];

        function createCategory(title, value, key) {
            return React.createElement(
                'div',
                {className : 'category', key},
                [
                    React.createElement('h3', null, title),
                    React.createElement('p', null, value)
                ]
            )
        }

        function Cards(elem, index) {
            return React.createElement(
                'div',
                {className : 'cards', key : index},
                [
                    React.createElement('img', {src : elem.image}),
                    React.createElement('h1', null, elem.name),
                    React.createElement(
                        'div',
                        {id : 'info'},
                        [
                            createCategory('Popularity', elem.popularity, 'pop'),
                            createCategory('Energy', elem.energy, 'energy'),
                            createCategory('Level', elem.level, 'level')
                        ]
                    )
                ]
            )
        }

        let parent = React.createElement(
            React.Fragment,
            null,
            info.map((elem, index)=> {
                return Cards(elem, index);
            })
        );

        let root = ReactDOM.createRoot(document.querySelector('#middle'));
        root.render(parent);