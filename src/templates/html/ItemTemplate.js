import Size from '../../graphics/structs/Size';

export default function ItemTemplate(options, itemTemplateConfig) {
    var _template = create(itemTemplateConfig);

    function create(config) {
        var contentSize = new Size(config.itemSize),
            itemTemplate;

        contentSize.width -= config.itemBorderWidth * 2;
        contentSize.height -= config.itemBorderWidth * 2;

        itemTemplate = [
            'div',
            {
                'style': {
                    border: 'none'
                },
                'class': ['bp-item', 'bp-corner-all', 'bt-item-frame', 'person-card'],
            },
            ['div',
                {
                    'name': 'avatarWrapper',
                    'style': {},
                    'class': ['bp-item', 'bp-description', 'person-card_avatar-wrapper'],
                },
                ['img', // photo
                    {
                        'name': 'avatar',
                        'alt': '',
                        'class': 'person-card_avatar',
                        'style': {
                            width: '100px',
                            height: '100px',
                            'object-fit': 'cover',
                        },
                    },
                ],
            ],
            ['div',
                {
                    'name': 'title',
                    'style': {},
                    'class': ['bp-item', 'bp-description', 'person-card_name'],
                },
            ],
            ['div',
                {
                    'name': 'description',
                    'style': {},
                    'class': ['bp-item', 'bp-description', 'person-card_dates'],
                },
            ],
        ];

        return itemTemplate;
    }

    function template() {
        return _template;
    }

    function getHashCode() {
        return 'defaultItemTemplate';
    }

    function render(event, data) {
        var itemConfig = data.context,
            element = data.element,
            photoWrapper = element.firstChild,
            photo = element.firstChild.firstChild,
            ribbon = element.firstChild.childNodes[1],
            title = element.childNodes[1],
            description = element.childNodes[2];

        photo.src = itemConfig.avatar;
        photo.alt = itemConfig.title;
        title.textContent = itemConfig.title;
        description.textContent = itemConfig.dates;


        if (itemConfig.isAlive === false && !ribbon) {
            const ribbon = document.createElement('div');
            ribbon.className = 'person-card_avatar_ribbon';
            ribbon.innerHTML = `<span>.</span>`;
            photoWrapper.appendChild(ribbon);
        }
    }

    return {
        template: template,
        getHashCode: getHashCode,
        render: render,
    };
};
