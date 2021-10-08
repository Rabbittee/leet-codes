# 1341. Split a String in Balanced Strings

`Easy`

## Description

<p><strong>Balanced</strong> strings are those that have an equal quantity of <code>&#39;L&#39;</code> and <code>&#39;R&#39;</code> characters.</p>

<p>Given a <strong>balanced</strong> string <code>s</code>, split it in the maximum amount of balanced strings.</p>

<p>Return <em>the maximum amount of split <strong>balanced</strong> strings</em>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;RLRRLLRLRL&quot;
<strong>Output:</strong> 4
<strong>Explanation: </strong>s can be split into &quot;RL&quot;, &quot;RRLL&quot;, &quot;RL&quot;, &quot;RL&quot;, each substring contains same number of &#39;L&#39; and &#39;R&#39;.
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;RLLLLRRRLR&quot;
<strong>Output:</strong> 3
<strong>Explanation: </strong>s can be split into &quot;RL&quot;, &quot;LLLRRR&quot;, &quot;LR&quot;, each substring contains same number of &#39;L&#39; and &#39;R&#39;.
</pre>

<p><strong>Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;LLLLRRRR&quot;
<strong>Output:</strong> 1
<strong>Explanation: </strong>s can be split into &quot;LLLLRRRR&quot;.
</pre>

<p><strong>Example 4:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;RLRRRLLRLL&quot;
<strong>Output:</strong> 2
<strong>Explanation: </strong>s can be split into &quot;RL&quot;, &quot;RRRLLRLL&quot;, since each substring contains an equal number of &#39;L&#39; and &#39;R&#39;
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 1000</code></li>
	<li><code>s[i]</code> is either <code>&#39;L&#39;</code> or <code>&#39;R&#39;</code>.</li>
	<li><code>s</code> is a <strong>balanced</strong> string.</li>
</ul>


---

### Topic Tags

[string]: https://img.shields.io/badge/-String-EF9A9A
[greedy]: https://img.shields.io/badge/-Greedy-B39DDB
[counting]: https://img.shields.io/badge/-Counting-81D4FA

![String][string]

![Greedy][greedy]

![Counting][counting]

---

##### [original question](https://leetcode.com/problems/split-a-string-in-balanced-strings)
