class BrowserHistory {
public:
    BrowserHistory(string homepage) {
        // initialize
        browserHistoryPages = vector<string>{homepage};
        nowStationIndex = 0;
    }
    
    void visit(string url) {
        
        // If the nowStationIndex is not final index, please delelte all the items firstly.
        // And then we could add the new element.
        
        if (nowStationIndex != browserHistoryPages.size()-1) {
            browserHistoryPages.erase(browserHistoryPages.begin() + nowStationIndex + 1, browserHistoryPages.end());
        }
        
        browserHistoryPages.push_back(url);
        nowStationIndex++;
    }
    
    string back(int backSteps) {
        
        // back counts equal to backSteps and make sure the nowStationIndex could only back at least to homepage.
        nowStationIndex -= backSteps;
        nowStationIndex = nowStationIndex >= 0 ? nowStationIndex : 0;
        
        return browserHistoryPages[nowStationIndex];
    }
    
    string forward(int fowardSteps) {
        
        // foward counts equal to fowardSteps and make sure the nowStationIndex could only foward at most to final page.
        nowStationIndex += fowardSteps;
        nowStationIndex = (nowStationIndex >= (browserHistoryPages.size()-1)) ? browserHistoryPages.size()-1 : nowStationIndex;
        
        return browserHistoryPages[nowStationIndex];
    }
private:
    int nowStationIndex;
    vector<string> browserHistoryPages;
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * BrowserHistory* obj = new BrowserHistory(homepage);
 * obj->visit(url);
 * string param_2 = obj->back(steps);
 * string param_3 = obj->forward(steps);
 */