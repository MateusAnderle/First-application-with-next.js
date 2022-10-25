import { styled } from "..";

export const ModalContainer = styled('div', {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1,
    height: '100vh',
    padding: 48,
});


export const ContentWrapper = styled('div', {

});

export const TotalWrapper = styled('div', {
    display: "flex",
    flexDirection: "column",

    
    button: {
        padding: '20px',
        border: 'none',
        fontSize: '$lg',
        fontWeight: 'bold',
        borderRadius: 6,
        color: '$white',
        backgroundColor: '$green500',
        cursor: 'pointer',

        '&:hover': {
            backgroundColor: '$green300',
        }
    }
});

export const TotalTexts = styled('div', {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",

    span: {
        fontSize: '0.9rem',
        color: '$gray300',
        marginBottom: '1rem',
    },

    strong: {
        fontSize: '$lg',
        marginBottom: '55px',
    },
});

export const ModalCard = styled('div', {
    display: "flex",
    flexDirection: "row",
    marginTop: '1.5rem',
})

export const ImageModalCard = styled('div', {
    width: '100%',
    maxWidth: 100,
    height: 100,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    padding: '0.25rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: "cover",
    }
});

export const ModalCardContent = styled('div', {
    display: "flex",
    flexDirection: "column",
    padding: '0.5rem 1.25rem',
    justifyContent: "space-around",

    span: {
        fontSize: '0.9rem',
        color: '$gray300'
    },

    strong: {
        fontSize: '$md',
        color: '$white',
    },

    p: {
        fontSize: '0.9rem',
        color: '$green500',
        fontWeight: "bold",
        cursor: "pointer",

        '&:hover': {
            color: '$green300',
        }
    }
})