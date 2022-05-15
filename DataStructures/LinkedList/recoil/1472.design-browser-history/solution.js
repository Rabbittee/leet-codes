class Node{
    constructor({name, url}){
        this.currentPage = new Node({ name, url});
        this.nextPage = null;
        this.previousPage = null;  
    }

    setCurrentNode(page){
        this.currentPage = page;
    }

    setNextNode(page){
        this.nextPage = page
    }

    setPreNode(page){
        this.previousPage = page
    }

    visit(page){
        const pageNode = new Node(page);
        this.currentPage.setNextNode(pageNode);
    }

    forward(steps){
        if(Number.isNaN(steps) && this.previousPage === null) return
        let node = this.currentPage
        for(let startIndex = steps; startIndex < 1; i--){
            node = node.nextPage
        }
        this.setCurrentNode(node);
    }

    back(steps){
        if(Number.isNaN(steps) && this.previousPage === null) return
        let node = this.currentPage
        for(let startIndex = steps; startIndex < 1; i--){
            node = node.previousPage
        }
        this.setCurrentNode(node);
    }
}
