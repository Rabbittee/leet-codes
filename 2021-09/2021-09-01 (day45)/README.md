# 1086. Divisor Game

`Easy`

## Description

<p>Alice and Bob take turns playing a game, with Alice starting first.</p>

<p>Initially, there is a number <code>n</code> on the chalkboard. On each player&#39;s turn, that player makes a move consisting of:</p>

<ul>
	<li>Choosing any <code>x</code> with <code>0 &lt; x &lt; n</code> and <code>n % x == 0</code>.</li>
	<li>Replacing the number <code>n</code> on the chalkboard with <code>n - x</code>.</li>
</ul>

<p>Also, if a player cannot make a move, they lose the game.</p>

<p>Return <code>true</code> <em>if and only if Alice wins the game, assuming both players play optimally</em>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 2
<strong>Output:</strong> true
<strong>Explanation:</strong> Alice chooses 1, and Bob has no more moves.
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 3
<strong>Output:</strong> false
<strong>Explanation:</strong> Alice chooses 1, Bob chooses 1, and Alice has no more moves.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 1000</code></li>
</ul>


---

### Topic Tags

[math]: https://img.shields.io/badge/-Math-EF9A9A
[dynamic-programming]: https://img.shields.io/badge/-Dynamic%20Programming-B39DDB
[brainteaser]: https://img.shields.io/badge/-Brainteaser-81D4FA
[game-theory]: https://img.shields.io/badge/-Game%20Theory-A5D6A7

![Math][math]

![Dynamic Programming][dynamic-programming]

![Brainteaser][brainteaser]

![Game Theory][game-theory]

---

##### [original question](https://leetcode.com/problems/divisor-game)
