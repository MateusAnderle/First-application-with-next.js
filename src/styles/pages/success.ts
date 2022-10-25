import { styled } from "..";

export const SuccessContainer = styled('main', {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    margin: '0 auto',
    height: 656,

    h1: {
        marginTop: '3rem',
        fontSize: '$2xl',
        color: '$gray100',
    },
    
    p: {
        fontSize: '$xl',
        color: '$gray300',
        maxWidth: 560,
        textAlign: "center",
        marginTop: '2rem',
        lineHeight: 1.4,
    },

    a: {
        display: 'block',
        marginTop: '5rem',
        fontSize: '$lg',
        color: '$green500',
        textDecoration: 'none',
        fontWeight: 'bold',

        '&:hover': {
            color: '$green300'
        }
    }
});

export const ImageWrapper = styled('div', {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
})

export const ImageContainer = styled('div', {
    width: '100%',
    maxWidth: 150,
    height: 150,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    boxShadow: '-8px 3px 15px #000;',
    borderRadius: 100,
    padding: '0.25rem',
    marginTop: '4rem',
    marginLeft: '-3rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    
    '&:first-child': {
        marginLeft: '0rem',
    },

    img: {
        objectFit: "cover",
    }
});