# 290. Word Pattern

`Easy`

## Description

<p>Given a <code>pattern</code> and a string <code>s</code>, find if <code>s</code>&nbsp;follows the same pattern.</p>

<p>Here <b>follow</b> means a full match, such that there is a bijection between a letter in <code>pattern</code> and a <b>non-empty</b> word in <code>s</code>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> pattern = &quot;abba&quot;, s = &quot;dog cat cat dog&quot;
<strong>Output:</strong> true
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> pattern = &quot;abba&quot;, s = &quot;dog cat cat fish&quot;
<strong>Output:</strong> false
</pre>

<p><strong>Example 3:</strong></p>

<pre>
<strong>Input:</strong> pattern = &quot;aaaa&quot;, s = &quot;dog cat cat dog&quot;
<strong>Output:</strong> false
</pre>

<p><strong>Example 4:</strong></p>

<pre>
<strong>Input:</strong> pattern = &quot;abba&quot;, s = &quot;dog dog dog dog&quot;
<strong>Output:</strong> false
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= pattern.length &lt;= 300</code></li>
	<li><code>pattern</code> contains only lower-case English letters.</li>
	<li><code>1 &lt;= s.length &lt;= 3000</code></li>
	<li><code>s</code> contains only lower-case English letters and spaces <code>&#39; &#39;</code>.</li>
	<li><code>s</code> <strong>does not contain</strong> any leading or trailing spaces.</li>
	<li>All the words in <code>s</code> are separated by a <strong>single space</strong>.</li>
</ul>


---

### Topic Tags

[hash-table]: https://img.shields.io/badge/-Hash%20Table-EF9A9A
[string]: https://img.shields.io/badge/-String-B39DDB

![Hash Table][hash-table]

![String][string]

---

##### [original question](https://leetcode.com/problems/word-pattern)
