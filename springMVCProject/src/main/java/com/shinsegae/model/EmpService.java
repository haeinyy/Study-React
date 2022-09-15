package com.shinsegae.model;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shinsegae.dto.EmpVO;
import com.shinsegae.dto.JobVO;

//����ڿ�û-->Controller-->Service-->DAO--->DB
//        <--         <--        <--   <--         

@Service
public class EmpService  {
	
	@Autowired
	EmpDAOMybatis empDAO  ;

	// 1.���������ȸ
	public List<EmpVO> selctAll() {
		return empDAO.selctAll();
	}

	
	public List<JobVO> selctJobAll() {
		return empDAO.selctJobAll();
	}
	
	public List<EmpVO> selctManagerAll() {
		return empDAO.selctManagerAll();
	}
	
	
	
	// 2.������ȸ(Ư���μ�)
	public List<EmpVO> selctByDept(int deptid) {
		return empDAO.selctByDept(deptid);
	}

	// 3.������ȸ(Ư���޴���)
	public List<EmpVO> selctByManager(int mid) {
		return empDAO.selctByManager(mid);
	}

	// 4.������ȸ(Ư��job)
	public List<EmpVO> selctByJob(String job_id) {
		return empDAO.selctByJob(job_id);
	}

	// 5.������ȸ(Ư�� department_id=, job_id=, salary>=?, hire_date>=?)
	public List<EmpVO> selctByCondition(int deptid, String job_id, double sal, String hire_date) {
		return empDAO.selctByCondition(deptid, job_id, sal, hire_date);
	}

	// 6.Ư������ 1�� ��ȸ
	public EmpVO selectById(int empid) {
		return empDAO.selectById(empid);
	}

	// 7.insert
	public int empInsert(EmpVO emp) {

		return empDAO.empInsert(emp);
	}

	// 8.update(Ư������ 1�� employee_id=?)
	public int empUpdate(EmpVO emp) {

		return empDAO.empUpdate(emp);
	}
 

	// 10.delete(Ư������ 1�� employee_id=?)
	public int empDelete(int empid) {

		return empDAO.empDelete(empid);
	}

	// 11.delete(���� department_id=?)
	public int empDeleteByDept(int deptid) {

		return empDAO.empDeleteByDept(deptid);
	}
	//�̸��� �ߺ�üũ 
	public int selectByEmail(String email) {
		return empDAO.selectByEmail(email);
	}

	
}
