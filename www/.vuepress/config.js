module.exports = {
    title: 'openbase.org',
    description: 'Smart Technology Development Community',
    head: [
        ['link', {rel: 'icon', href: '/images/openbase_logo.png'}],
    ],
    themeConfig: {
        logo: '/images/openbase_logo.svg',
        nav: [
            {text: 'Projects', link: '/projects/'},
            {text: 'Guidelines', link: '/guidelines/'},
            {text: 'Tools', link: '/tools/'},
            {text: 'Contact', link: '/contact'}
        ],
        displayAllHeaders: true,
        sidebar: [
            '/',
            '/projects/',
            '/guidelines/',
            '/tools/',
            '/contact'
        ],
        lastUpdated: 'Last Updated',
        repo: 'openbase',
        // if your docs are in a different repo from your main project:
        docsRepo: 'openbase/website',
        editLinks: true,

    },
    sidebar: 'auto',
    serviceWorker: true,

    openbasepr: 'test'

}
