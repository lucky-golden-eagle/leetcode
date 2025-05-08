class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer
     */
    function search($nums, $target) {
        $foundKey = -1;
        foreach ($nums as $key => $value) {
            if ($value === $target) {
                $foundKey = $key;
            }
        }
        return $foundKey;
    }
}