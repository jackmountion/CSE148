package sample1;

public class Student {
	private Name name;
	private String id;
	private double gpa;

	private static int idCounter;

	public Student(String fName, String lName) {
		idCounter++;
		id = String.valueOf(idCounter);
		this.name = new Name(fName, lName);
	}
	
	public Student(String fName, char mInitial, String lName) {
		idCounter++;
		id = String.valueOf(idCounter);
		this.name = new Name(fName, mInitial, lName);
	}

	public Student() {
	}

	public Name getName() {
		return name;
	}

	public void setName(String fName, char mInitial, String lName) {
		name = new Name(fName, mInitial, lName);
	}
	
	public void setName(String fName, String lName) {
		name = new Name(fName, lName);
	}
	
	public void setName(Name name) {
		this.name = name;
	}

	public String getId() {
		return id;
	}

	public double getGpa() {
		return gpa;
	}

	public void setGpa(double gpa) {
		this.gpa = gpa;
	}

	@Override
	public String toString() {
		return "Student [name=" + name + ", id=" + id + ", gpa=" + gpa + "]";
	}

}
