import { REGEXT_NEXT, REGEXT_PREV, REGEXT_FIRS, REGEXT_LAST } from '../constants/regExp'

export function getPageId(url) {
    const x = new URLSearchParams(url)

    for (const i of x) {
        if (i[0] === 'https://api.magicthegathering.io/v1/cards/?page') {
            return +i[1]
        }
    }
}

export function getHeadersLinks(headers) {
    const HeadersLink = headers.get('link')
    const regExpLink = /https?:\/\/\S+\d+/

    const links = {
        next: null,
        prev: null,
        first: null,
        last: null
    }

    HeadersLink.split(',').forEach(item => {
        if (REGEXT_NEXT.test(item)) links.next = item.match(regExpLink)[0]
        if (REGEXT_LAST.test(item)) links.last = item.match(regExpLink)[0]
        if (REGEXT_PREV.test(item)) links.prev = item.match(regExpLink)[0]
        if (REGEXT_FIRS.test(item)) links.first = item.match(regExpLink)[0]
    })

    return links
}