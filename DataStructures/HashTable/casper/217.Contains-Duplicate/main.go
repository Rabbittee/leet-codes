package main

import "fmt"

func containsDuplicate(nums []int) bool {
	myMap := NewMyMap(97) // I hard code a prime number here, cuz I am lazy.
	for _, num := range nums {
		if myMap.Contains(num) {
			return true
		}
		myMap.Put(num)
	}
	return false
}

type DataNode struct {
	Value int
	Next  *DataNode
}

type MyMap struct {
	data    []*DataNode
	mapSize int
}

func NewMyMap(capacity int) *MyMap {
	return &MyMap{
		data:    make([]*DataNode, capacity),
		mapSize: capacity,
	}
}

// Put a value into MyMap
func (m *MyMap) Put(value int) {
	targetIndex := m.getTargetIndex(value)
	if node := m.data[targetIndex]; node != nil {
		if node.Find(value) == nil {
			node.Add(value)
		}
	} else {
		m.data[targetIndex] = &DataNode{Value: value}
	}
}

// Contains reuturn true if the value was putted in MyMap
func (m *MyMap) Contains(value int) bool {
	if node := m.data[m.getTargetIndex(value)]; node != nil {
		return node.Find(value) != nil
	}
	return false
}

// Return the index of where the value should store at in the array
func (m *MyMap) getTargetIndex(value int) int {
	if mod := value % m.mapSize; mod > 0 {
		return mod
	} else {
		return -mod
	}
}

// Find the DataNode has the same value in the linked-list
// return nil if not exists
func (m *DataNode) Find(value int) *DataNode {
	cur := m
	for cur != nil {
		if cur.Value == value {
			return cur
		}
		cur = cur.Next
	}
	return nil
}

// Add a new node at the end of the linked-list
func (m *DataNode) Add(value int) {
	cur := m
	for cur.Next != nil {
		cur = cur.Next
	}
	cur.Next = &DataNode{Value: value}
}

func main() {
	fmt.Printf("%v", containsDuplicate([]int{1, 2, 3, 1}))
}
