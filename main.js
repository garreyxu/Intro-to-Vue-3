const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            descritopn: 'description placeholder',
            image: './assets/images/socks_green.jpg',
            url: 'http://www.google.com',
            inventory: 0,
            onSale: false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green' },
                { id: 2235, color: 'blue' },
            ],
            sizes: ['S', 'M', 'L', 'XL']
        }
    }
})
