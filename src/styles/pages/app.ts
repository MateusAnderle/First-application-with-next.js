import { styled } from "..";

export const Container = styled('div', {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    minHeight: '100vh',
})

export const Header = styled('header', {
    display: "flex",
    justifyContent: 'space-between',
    alignItems: "center",
    padding: '2rem 0',
    width: '100%',
    maxWidth: '1180px',
    margin: '0 auto',
    position: 'relative',

    span: {
        cursor: "pointer",
    },
});


export const DivNotification = styled('div', {
    '&:after': {
        content: '2',
        width: '23px',
        height: '23px',
        borderRadius: '50%',
        display: 'flex',
        position: 'absolute',
        top: '30px',
        right: '-10px',
        background: '$green500',
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: '0.75rem',
        textAlign: 'center',
    }
})