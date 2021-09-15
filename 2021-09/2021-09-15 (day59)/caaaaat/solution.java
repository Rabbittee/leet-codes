class Solution {
    public String simplifyPath(String path) {
        Stack<String> stack = new Stack<>();
        String[] parts = path.split("/");
        for (String s : parts) {
            if (s.isEmpty() || s.equals("."))
                continue;
            if (s.equals("..")) {
                if (!stack.isEmpty()) stack.pop();
                continue;
            }
            stack.push(s);
        }
        
        StringBuffer sb = new StringBuffer();
        while (!stack.isEmpty()) {
            sb.insert(0, "/" + stack.pop());
        }
        if (sb.length() == 0) {
            sb.append("/");
        } 
        return sb.toString();
    }
}