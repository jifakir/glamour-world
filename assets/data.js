import { MdComputer, MdOutlineBrush } from 'react-icons/md';
import { GiBarbedNails, GiHairStrands, GiFragrance, GiBathtub } from 'react-icons/gi';
import { AiOutlineSkin } from 'react-icons/ai';
import { IoMan, IoGiftSharp } from 'react-icons/io5';

export const CATEGORIES = [
    {
        cat: 'Makeup',
        icon: <MdComputer />,
        sub_cat: [
            {
                id: 1,
                name: 'Foundation'
            },
            {
                id: 2,
                name: 'Face Power'
            },
            {
                id: 3,
                name: 'Concealer'
            },
            {
                id: 4,
                name: 'Color Correcting'
            },
            {
                id: 5,
                name: 'Face Primer'
            },
            {
                id: 6,
                name: 'Eyeliner'
            },
            {
                id: 7,
                name: 'Eyebrows'
            },
            {
                id: 8,
                name: 'Lipstick'
            },
            {
                id: 9,
                name: 'Lip Stain'
            },
        ]
    },
    {
        cat: 'Nails',
        icon: <GiBarbedNails />,
        sub_cat: [
            {
                id: 1,
                name: 'Nail Polish'
            },
            {
                id: 2,
                name: 'Gel Nail Polish'
            },
            {
                id: 3,
                name: 'Press On Nails'
            },
            {
                id: 4,
                name: 'Nail Treatments'
            },
        ]
    },
    {
        cat: 'Skin Care',
        icon: <AiOutlineSkin />,
        sub_cat: [
            {
                id: 1,
                name: 'Cleansers'
            },
            {
                id: 2,
                name: 'Moisturizers'
            },
            {
                id: 3,
                name: 'Eye Treatments'
            },
            {
                id: 4,
                name: 'Suncare'
            },
            {
                id: 5,
                name: 'Supplements'
            },
            {
                id: 6,
                name: 'Serums'
            },
        ]
    },
    {
        cat: 'Hair',
        icon: <GiHairStrands />,
        sub_cat: [
            {
                id: 1,
                name: 'Shampoo'
            },
            {
                id: 2,
                name: 'Conditioner'
            },
            {
                id: 3,
                name: 'Hair Color'
            },
            {
                id: 4,
                name: 'Hairspray'
            },
            {
                id: 5,
                name: 'Smoothing'
            },
        ]
    },
    {
        cat: 'Tools & Brushes',
        icon: <MdOutlineBrush />,
        sub_cat: [
            {
                id: 1,
                name: 'Flat Irons'
            },
            {
                id: 2,
                name: 'Hair Dryers'
            },
            {
                id: 3,
                name: 'Curling Irons'
            },
            {
                id: 4,
                name: 'Hair Removal'
            },
            {
                id: 5,
                name: 'Hair Brushes'
            },
        ]
    },
    {
        cat: 'Fragrance',
        icon: <GiFragrance />,
        sub_cat: [
            {
                id: 1,
                name: 'Perfume'
            },
            {
                id: 2,
                name: 'Body Lotions'
            },
            {
                id: 3,
                name: 'Cologne'
            },
            {
                id: 4,
                name: 'Bath & Shower'
            },
        ]
    },
    {
        cat: 'Bath & Body',
        icon: <GiBathtub />,
        sub_cat: [
            {
                id: 1,
                name: 'Bath & Shower'
            },
            {
                id: 2,
                name: 'Body Moisturizers'
            },
            {
                id: 3,
                name: 'Hand & Foot Care'
            },
            {
                id: 4,
                name: 'Body Treatments'
            },
            {
                id: 5,
                name: 'Deodorant'
            },
            {
                id: 6,
                name: 'Oral Care'
            },
        ]
    },
    {
        cat: 'Men',
        icon: <IoMan />,
        sub_cat: [
            {
                id: 1,
                name: 'Face Wash'
            },
            {
                id: 2,
                name: 'Moisturizers'
            },
            {
                id: 3,
                name: 'Aftershave'
            },
            {
                id: 4,
                name: 'Deodorant'
            },
            {
                id: 5,
                name: 'Beard Care'
            },
            {
                id: 6,
                name: 'Shampoo'
            },
            {
                id: 7,
                name: 'Conditionar'
            },
        ]
    },
    {
        cat: 'Gifts',
        icon:  <IoGiftSharp />,
        sub_cat: [
            {
                id: 1,
                name: 'Makeup Gifts'
            },
            {
                id: 2,
                name: 'Nail Gifts'
            },
            {
                id: 3,
                name: 'Skin Gifts'
            },
            {
                id: 4,
                name: 'Hair Gifts'
            },
            {
                id: 5,
                name: 'Tool & Brush Gifts'
            },
            {
                id: 6,
                name: 'Bath & Body Gifts'
            },
            {
                id: 7,
                name: 'Fragrance Gifts'
            },
            {
                id: 8,
                name: `Men's Gifts`
            },
        ]
    },
];