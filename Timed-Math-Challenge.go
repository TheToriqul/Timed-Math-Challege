package main

import (
    "fmt"
    "math/rand"
    "strconv"
    "time"
)

var (
    operators    = []string{"+", "-", "*"}
    minOperand   = 4
    maxOperand   = 15
    totalProblems = 10
)

func generateProblem() (string, int) {
    left := rand.Intn(maxOperand-minOperand+1) + minOperand
    right := rand.Intn(maxOperand-minOperand+1) + minOperand
    operator := operators[rand.Intn(len(operators))]

    expr := fmt.Sprintf("%d %s %d", left, operator, right)
    var answer int

    switch operator {
    case "+":
        answer = left + right
    case "-":
        answer = left - right
    case "*":
        answer = left * right
    }

    return expr, answer
}

func main() {
    rand.Seed(time.Now().UnixNano())

    var wrong int
    fmt.Println("Press Enter to start")
    fmt.Scanln()
    fmt.Println("--------------------------------")

    startTime := time.Now()

    for i := 0; i < totalProblems; i++ {
        expr, answer := generateProblem()
        for {
            fmt.Printf("Problem #%d: %s = ", i+1, expr)
            var guess string
            fmt.Scan(&guess)
            if guessInt, err := strconv.Atoi(guess); err == nil && guessInt == answer {
                break
            }
            wrong++
        }
    }

    totalTime := time.Since(startTime).Seconds()

    fmt.Println("--------------------------------")
    fmt.Printf("Nice Work! You finished in %.2f seconds!\n", totalTime)
}
