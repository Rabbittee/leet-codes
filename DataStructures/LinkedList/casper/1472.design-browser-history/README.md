2.Linked list
===

[1472. Design Browser History](https://leetcode.com/problems/design-browser-history/)

We need to achieve  a browser-history feature. 

- requirement
   - Can go to the previous page
   - Can go to the next page
   - Can visit new 
   
We are gonna using pointer to efficiently store the history page, so the page would use the below struct.
```go
type Page struct {
    url  string
    prev *Page
    next *Page
}
```
And we also need a location to record the pointer of the current page,  we record the current page in the provided BrowserHistory struct.
```go
type BrowserHistory struct {
    currentPage *Page
}
```
The test calls the Constructor function to initial BrowserHistory.
- Time Complexity: `O(1)`
- Space Complexity: `O(n)`, when homepage uses a longer length, we will allocate more memory to store it.
```go
func Constructor(homepage string) BrowserHistory {
    return BrowserHistory{
        currentPage: &Page{
            url: homepage,
        },
    }
}
```
To back to the previous page or forward to the next page, there had already defined function interface, and we need to write the code inside.
For the back and forward function, the input is steps which means the page should go back to forward how many pages.
We use a for loop to get the next page and current page to it, and in each step we also need to check if the next pointer is nil, if true, we stop the iteration and return the URL of the current page.
`For back, we check if the prev pointer is nil.`
`For forward, we check if the next pointer is nil.`
- Time Complexity:
  - We don't consider the early break situation, there only exists a for loop that will iterate steps times, so the time complexity is `O(n)`
- Space Complexity: 
  - There does no change in allocated memory size, no matter how many steps are, so the space complexity is `O(1)`
```go
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
```
To go to a new page, there has a function called to visit, and it doesn't return any value, so it should create a new page and add to the current record linked list.
- Time Complexity: the optimization would not be affected by URL length, so the time complexity is `O(1)`
- Space Complexity: 
  - When the input URL gets longer length, we will need more memory to store it, so the space complexity is `O(n)`
```go
func (this *BrowserHistory) Visit(url string) {
    visitPage := &Page{
        url: url,
        prev: this.currentPage,
    }
    this.currentPage.next = visitPage
    this.currentPage = visitPage
}
```

Here is the code of the solution.
```go
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
        url: url,
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
```
