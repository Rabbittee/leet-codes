package main

type Page struct {
    url  string
    prev *Page
    next *Page
}

type BrowserHistory struct {
    currentPage *Page
}

func Constructor(homepage string) BrowserHistory {
    return BrowserHistory{
        currentPage: &Page{
            url: homepage,
        },
    }
}

func (this *BrowserHistory) Visit(url string) {
    visitPage := &Page{
        url:  url,
        prev: this.currentPage,
    }
    this.currentPage.next = visitPage
    this.currentPage = visitPage
}

func (this *BrowserHistory) Back(steps int) string {
    for i := 0; i < steps; i++ {
        if this.currentPage.prev == nil {
            break
        }
        this.currentPage = this.currentPage.prev
    }
    return this.currentPage.url
}

func (this *BrowserHistory) Forward(steps int) string {
    for i := 0; i < steps; i++ {
        if this.currentPage.next == nil {
            break
        }
        this.currentPage = this.currentPage.next
    }
    return this.currentPage.url
}
