defmodule Solution do
  @spec max_depth(s :: String.t()) :: integer
  def max_depth(s) do
    s
    |> String.graphemes()
    |> Enum.reduce({0, 0}, fn
      "(", {stack, depth} -> {stack + 1, max(stack + 1, depth)}
      ")", {stack, depth} -> {stack - 1, depth}
      _, acc -> acc
    end)
    |> elem(1)
  end
end
