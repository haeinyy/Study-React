package com.shinsegae.model;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shinsegae.dto.DeptDTO;

//Service : Business Logic�ۼ��Ѵ�. 
//DB�۾��� DAOȣ���Ѵ�.

@Service
public class DeptService {
	
	@Autowired
	private DeptDAOMybatis deptDAO;
	//private DeptDAO deptDAO;
	
	// 1.�����ȸ
	public List<DeptDTO> selectAll() {
		return deptDAO.selectAll();
	}

	// 2.Ư���μ���ȸ(�μ��ڵ�� ��ȸ)
	public DeptDTO selectById(int deptid) {
		return deptDAO.selectById(deptid);
	}

	// 3.�����ڵ�� ��ȸ
	public List<DeptDTO> selectByLocation(int locid) {
		return deptDAO.selectByLocation(locid);
	}

	// 4.�űԺμ��Է�
	public int deptInsert(DeptDTO dept) {
		return deptDAO.deptInsert(dept);
	}

	// 5.Ư���μ� ����
	public int deptUpdate(DeptDTO dept) {
		return deptDAO.deptUpdate(dept);
	}

	// 6.Ư���μ� ����
	public int deptDelete(int deptid) {
		return deptDAO.deptDelete(deptid);
	}

}
