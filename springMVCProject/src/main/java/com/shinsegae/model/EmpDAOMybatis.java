package com.shinsegae.model;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.shinsegae.dto.EmpVO;
import com.shinsegae.dto.JobVO;

//CRUD�۾�(insert(C), select(R),update(U), Delete(D)==>DAO(Data Access Object)
@Repository
public class EmpDAOMybatis {
 
	@Autowired
	SqlSession session;
	
	static final String NAME_SPACE = "net.gasan.emp.";
	Logger logger = LoggerFactory.getLogger(EmpDAOMybatis.class);
	// 1.���������ȸ
	public List<EmpVO> selctAll() {
		List<EmpVO> emplist = session.selectList(NAME_SPACE + "selectAll");
		logger.info("selctAll���:" + emplist.size());		
		return emplist;
	}

	// ���jobs��ȸ
	public List<JobVO> selctJobAll() {
		List<JobVO> joblist = session.selectList(NAME_SPACE + "selectJobAll");
		logger.info("selctJobAll���:" + joblist.size());		
		return joblist;
	}

	// ��� manager��ȸ
	public List<EmpVO> selctManagerAll() {
		List<EmpVO> emplist = session.selectList(NAME_SPACE + "selectbyManager");
		logger.info("selctManagerAll���:" + emplist.size());		
		return emplist;
	}

	 

	// 2.������ȸ(Ư���μ�)
	public List<EmpVO> selctByDept(int deptid) {
		List<EmpVO> emplist = session.selectList(NAME_SPACE + "selectByDept", deptid);
		logger.info("selctByDept���:" + emplist.size());		
		return emplist;
	}

	// 3.������ȸ(Ư���޴���)
	public List<EmpVO> selctByManager(int mid) {
		List<EmpVO> emplist = session.selectList(NAME_SPACE + "selectByManager2", mid);
		logger.info("selctByManager���:" + emplist.size());		
		return emplist;
	}

	// 4.������ȸ(Ư��job)
	public List<EmpVO> selctByJob(String job_id) {
		List<EmpVO> emplist = session.selectList(NAME_SPACE + "selectByJob", job_id);
		logger.info("selctByJob���:" + emplist.size());		
		return emplist;
	}

	// 5.������ȸ(Ư�� department_id=, job_id=, salary>=?, hire_date>=?)
	public List<EmpVO> selctByCondition(int deptid, String job_id, double sal, String hire_date) {
		Map<String,Object> map = new HashMap<String, Object>();
		map.put("salary", sal);
		map.put("deptid", deptid);
		map.put("jobid", job_id);
		map.put("hiredate", hire_date);
		List<EmpVO> emplist = session.selectList(NAME_SPACE + "selectByCondition", map);
		logger.info("selectByCondition���:" + emplist.size());		
		return emplist;
	}

	// 6.Ư������ 1�� ��ȸ
	public EmpVO selectById(int empid) {
		EmpVO emp = session.selectOne(NAME_SPACE + "selectById", empid);
		logger.info("selectById���:" + emp.toString());		
		return emp;
	}

	// 7.insert
	public int empInsert(EmpVO emp) {
		int result = session.insert(NAME_SPACE + "insert", emp);
		logger.info("empInsert���:" + result + "�� �Է�");	
		return result;
	}

	// 8.update(Ư������ 1�� employee_id=?)
	public int empUpdate(EmpVO emp) {
		int result = session.update(NAME_SPACE + "update", emp);
		logger.info("empUpdate���:" + result + "�� ����");		
		return result;
	}

 	// 10.delete(Ư������ 1�� employee_id=?)
	public int empDelete(int empid) {
		int result = session.delete(NAME_SPACE + "delete", empid);
		logger.info("empUpdate���:" + result + "�� ����");		
		return result;
	}

	// 11.delete(���� department_id=?)
	public int empDeleteByDept(int deptid) {
		int result = session.delete(NAME_SPACE + "deleteByDept", deptid);
		logger.info("empDeleteByDept���:" + result + "�� ����");		
		return result;
	}
	
	//�̸��� �ߺ�üũ�ϱ� 
	public int selectByEmail(String email) {
		int result = session.selectOne(NAME_SPACE + "selectByEmailDup", email);
		logger.info("selectByEmail���:" + result + "�� ��ȸ");		
		return result;
	}
	

}
