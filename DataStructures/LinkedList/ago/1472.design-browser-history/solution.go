type Node struct {
    prev *Node
    next *Node
    url string
}

type BrowserHistory struct {
    cur *Node
}


func Constructor(homepage string) BrowserHistory {
    node := &Node{url: homepage}
    return BrowserHistory{cur: node};
}


func (this *BrowserHistory) Visit(url string)  {
    newNode := &Node{prev: this.cur, url: url}
    this.cur.next = newNode
    this.cur = newNode
}


func (this *BrowserHistory) Back(steps int) string {
    for ;(steps != 0 && this.cur.prev != nil)
    {    
        this.cur = this.cur.prev
        steps -=1
    }
    return this.cur.url;
}


func (this *BrowserHistory) Forward(steps int) string {
    for ;(steps != 0 && this.cur.next != nil)
    {    
        this.cur = this.cur.next
        steps -= 1
    }
    return this.cur.url;
}


/**
 * Your BrowserHistory object will be instantiated and called as such:
 * obj := Constructor(homepage);
 * obj.Visit(url);
 * param_2 := obj.Back(steps);
 * param_3 := obj.Forward(steps);
 */