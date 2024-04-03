export const getWebsocketConnectionString = () => {
    if(process.env.NODE === 'production')
        return `wss://${window.location.hostname}/`
    else
        return `ws://${window.location.hostname}:8080/`
}