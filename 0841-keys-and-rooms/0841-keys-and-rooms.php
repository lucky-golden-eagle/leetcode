class Solution {

    /**
     * @param Integer[][] $rooms
     * @return Boolean
     */
    function canVisitAllRooms($rooms) {
        $n = count($rooms);
        $visited = array_fill(0, $n, false); // Track visited rooms
        $stack = [0]; // Start with room 0

        while (!empty($stack)) {
            $room = array_pop($stack); // Get the current room
            if (!$visited[$room]) {
                $visited[$room] = true; // Mark the room as visited
                // Add all keys from the current room to the stack
                foreach ($rooms[$room] as $key) {
                    array_push($stack, $key);
                }
            }
        }

        // Check if all rooms are visited
        return count(array_filter($visited)) === $n;
    }
}