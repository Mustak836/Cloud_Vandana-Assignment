import java.util.Random;

class Solution {
    public static void shuffle(int nums[]) {
        Random random = new Random();
        int n = nums.length;
        
        for (int i = n - 1; i >= 1; i--) {
            int j = random.nextInt(i + 1);
            swapElements(nums, i, j);
        }
    }
    
    private static void swapElements(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    public static void main(String[] args) {
        int[] nums = {1, 2, 3, 4, 5, 6, 7};
        System.out.print("Original Array: ");
        for (int i = 0; i < nums.length; i++) {
            System.out.print(nums[i]);
            if (i < nums.length - 1) {
            	System.out.print(", ");
            }
        }
        System.out.println();
        
        shuffle(nums);
        
        System.out.print("Shuffled Array: ");
        for (int i = 0; i < nums.length; i++) {
            System.out.print(nums[i]);
            if (i < nums.length - 1) {
                System.out.print(", ");
            }
        }
        System.out.println();
    }
}
