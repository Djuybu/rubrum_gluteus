import java.util.ArrayList;
import java.util.List;

public class StudentManagement {
    Student[] students = new Student[100];
    int numOfStudents = 0;

    /**
     * Kiem tra 2 sinh vien cung nhom hay khong.
     *
     * @param s1 la tham so thu 1.
     * @param s2 la tham so thu 2.
     * @return true neu 2 sinh vien cung nhom va nguoc lai.
     */
    public static boolean sameGroup(Student s1, Student s2) {
        return s1.getGroup().equals(s2.getGroup());
    }

    /**
     * add new student to array.
     *
     * @param newStudent is new student.
     */
    public void addStudent(Student newStudent) {
        students[numOfStudents] = newStudent;
        numOfStudents++;
    }

    /**
     * Ham in ra cac sinh vien theo thu tu ten lop.
     *
     * @return tra ve string chua danh sach in theo yeu cau.
     */
    public String studentsByGroup() {
        List<String> listOfGroups = new ArrayList<>();
        StringBuilder res = new StringBuilder();
        for (int i = 0; i < numOfStudents; i++) {
            if (listOfGroups.contains(students[i].getGroup())) {
                continue;
            }
            listOfGroups.add(students[i].getGroup());

        }

        for (String group : listOfGroups) {
            res.append(group).append("\n");
            for (int i = 0; i < numOfStudents; i++) {
                if (students[i].getGroup().equals(group)) {
                    res.append(students[i].getInfo()).append("\n");
                }
            }
        }

        return res.toString();
    }

    /**
     * Ham xoa sinh vien khoi dannh sach
     *
     * @param id la id cua sinh vien
     */

    public void removeStudent(String id) {
        for (int i = 0; i < numOfStudents; i++) {
            if (students[i].getId().equals(id)) {
                for (int j = i; j < numOfStudents - 1; j++) {
                    students[j] = students[j + 1];
                }
                numOfStudents--;
                break;
            }
        }
    }

    public static void main(String[] args) {
        StudentManagement sm = new StudentManagement();
        Student s1 = new Student("Nva", "1702001", "1702001@vnu.edu.vn");
        sm.addStudent(s1);
        Student s2 = new Student("Nvb", "1702002", "1702002@vnu.edu.vn");
        s2.setGroup("K62CC");
        sm.addStudent(s2);
        Student s3 = new Student("Nvc", "1702003", "1702003@vnu.edu.vn");
        s3.setGroup("K62CD");
        sm.addStudent(s3);
        Student s4 = new Student("Nvd", "1702004", "1702004@vnu.edu.vn");
        s4.setGroup("K62CC");
        sm.addStudent(s4);
        Student s5 = new Student("Nvaa", "1702005", "1702005@vnu.edu.vn");
        sm.addStudent(s5);

        System.out.println(sm.studentsByGroup());
        sm.removeStudent("1702004");
        System.out.println(sm.studentsByGroup());

    }
}
