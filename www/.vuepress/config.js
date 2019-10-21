module.exports = {
    title: 'openbase.org',
    description: 'Smart Technology Development Community',
    head: [
        ['link', {rel: 'icon', href: '/images/openbase_logo.png'}],
    ],
    themeConfig: {
        logo: '/images/openbase_logo.svg',
        nav: [
            {text: 'Base Cube One', link: 'https://basecubeone.org'},
            {text: 'Projects', link: '/projects/'},
            {text: 'Contact', link: '/contact/'}
        ],
        displayAllHeaders: false,
        sidebar: [
            '/',
            '/projects/',
	    '/tools/',
            '/contact/'
        ],
        lastUpdated: 'Last Updated',
        repo: 'openbase',
        // if your docs are in a different repo from your main project:
        docsRepo: 'openbase/website',
        docsDir: 'www',
        editLinks: true,
        serviceWorker: {
            updatePopup: true // Boolean | Object, default to undefined.
            // If set to true, the default text config will be:
            // updatePopup: {
            //    message: "New content is available.",
            //    buttonText: "Refresh"
            // }
        }
    },
    markdown: {
        lineNumbers: true
    },

    sidebar: 'auto',
    serviceWorker: true
}
