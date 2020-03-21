



const initialState = {
    navBar: {
        user_name: 'Abhinit'
    },
    parentData: {
        startDate: '3th Sept, 2010',
        endDate: '3th Sept, 2010'
    },
    productPhotoshootData: [
        {
            title: "Fab Hotel Prime Ivory Pearl II",
            type: 'Photoshoot',
            id: 'ID 1734',
            billingAmont: ' 5500',
            category: 'Product Photoshoot',
            product: { name: 'Fab Buget', type: 'GOLD' },
            shootDateAndTime: "02/09/2019 12:30 PM",
            location: 'Bangalore',
            status: 'Confirm',
            approvalStatus: null,
            rating: '6'
        },
        {
            title: "Fab Hotel Prime Ivory Pearl II",
            type: 'Photoshoot',
            id: 'ID 1734',
            billingAmont: ' 5500',
            category: 'Product Photoshoot',
            product: { name: 'Fab Buget', type: 'SILVER' },
            shootDateAndTime: "02/09/2019 12:30 PM",
            location: 'Bangalore',
            status: 'Confirm',
            approvalStatus: null,
            rating: '6'
        },
        {
            title: "Fab Hotel Prime Ivory Pearl I",
            type: 'Photoshoot',
            id: 'ID 1734',
            billingAmont: ' 5500',
            category: 'Product Photoshoot',
            product: { name: 'Fab Buget', type: 'GOLD' },
            shootDateAndTime: "02/09/2019 12:30 PM",
            location: 'Bangalore',
            status: 'Confirm',
            approvalStatus: null,
            rating: '6'
        },


    ]
};

export default function (state = initialState, actions) {
    return state
}