import { styled } from "..";

export const Container = styled('div', {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    minHeight: '100vh',
})

export const HeaderStyle = styled('header', {
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

    span: {
        position: 'absolute',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: '23px',
        height: '23px',
        top: 28,
        right: -10,
        borderRadius: '50%',
        backgroundColor: '$green500',
        color: '$white',
        fontSize: 14,
    },
})