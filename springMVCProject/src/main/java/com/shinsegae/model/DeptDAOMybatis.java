package com.shinsegae.model;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.shinsegae.dto.DeptDTO;

@Repository
public class DeptDAOMybatis {
	
	Logger logger = LoggerFactory.getLogger(DeptDAOMybatis.class);
	
	
	@Autowired
	SqlSession sqlSession;
	
	static final String NAMESPACE="net.gasan.dept.";
	
	// 1.�����ȸ
	public List<DeptDTO> selectAll() {
		logger.info("mybatis:" + NAMESPACE + "selectAll");
		return sqlSession.selectList(NAMESPACE + "selectAll");
	}

	// 2.Ư���μ���ȸ(�μ��ڵ�� ��ȸ)
	public DeptDTO selectById(int deptid) {
		logger.info("mybatis:" + NAMESPACE + "selectById");
		return sqlSession.selectOne(NAMESPACE+"selectById", deptid);
	}

	// 3.�����ڵ�� ��ȸ
	public List<DeptDTO> selectByLocation(int locid) {
		logger.info("mybatis:" + NAMESPACE + "selectByLocation");
		return sqlSession.selectList(NAMESPACE+"selectByLocation", locid);
	}
	// 4.�űԺμ��Է�
	public int deptInsert(DeptDTO dept) {
		logger.info("mybatis:" + NAMESPACE + "insert");
		return sqlSession.insert(NAMESPACE+"insert", dept);
	}
	// 5.Ư���μ� ����
	public int deptUpdate(DeptDTO dept) {
		logger.info("mybatis:" + NAMESPACE + "update");
		return sqlSession.update(NAMESPACE+"update", dept);
	}

	// 6.Ư���μ� ����
	public int deptDelete(int deptid) {
		logger.info("mybatis:" + NAMESPACE + "delete");
		return sqlSession.delete(NAMESPACE+"delete", deptid);
	}
}
