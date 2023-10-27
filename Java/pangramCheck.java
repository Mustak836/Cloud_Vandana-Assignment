class PangramChecker {
    public static void main(String[] args) {
        System.out.println("Enter a sentence: ");
        StringBuilder input = new StringBuilder();
        try {
            int c;
            while ((c = System.in.read()) != '\n') {
                input.append((char) c);
            }
        } catch (java.io.IOException e) {
            e.printStackTrace();
        }

        if (isPangram(input.toString())) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean isPangram(String str) {
        boolean[] letterPresent = new boolean[26];

        for (int i = 0; i < str.length(); i++) {
            char c = str.charAt(i);
            if (c >= 'A' && c <= 'Z') {
                c = (char) (c + 32);
            }

            if (c >= 'a' && c <= 'z') {
                int index = c - 'a';
                letterPresent[index] = true;
            }
        }

        for (boolean present : letterPresent) {
            if (!present) {
                return false;
            }
        }

        return true;
    }
}
