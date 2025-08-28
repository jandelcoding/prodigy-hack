def prodigy_battle(player_name, question, correct_answer):
    """
    Simulates a math battle in Prodigy.
    Checks if the player's answer is correct and returns battle outcome.
    """
    print(f"🧙‍♂️ {player_name} enters the battle!")
    print(f"📚 Math Question: {question}")

    # Placeholder for player's answer (you can replace this with input or game logic)
    player_answer = None  # <-- You finish this part!

    if player_answer == correct_answer:
        print("✅ Correct! You cast a powerful spell and defeat the enemy!")
        # Add experience points, loot, or level-up logic here
    else:
        print("❌ Incorrect... The enemy strikes back!")
        # Add health deduction or retry logic here

    # Return battle summary or update player stats
    return {
        "player": player_name,
        "question": question,
        "answered_correctly": player_answer == correct
