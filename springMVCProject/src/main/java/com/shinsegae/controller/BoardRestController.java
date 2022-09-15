package com.shinsegae.controller;

import java.sql.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.shinsegae.dto.BoardDTO;
import com.shinsegae.model.BoardService;

@CrossOrigin
@RestController
@RequestMapping("/reactboard") 
public class BoardRestController {
	@Autowired
	BoardService bService;
	Logger logger = LoggerFactory.getLogger(BoardRestController.class);

 
	//��ȸ
	@RequestMapping("/boardList.do")
	public List<BoardDTO> boardRetrieve(Model model, HttpServletRequest request) {
		/*
		 * Map<String, ?> flashMap = RequestContextUtils.getInputFlashMap(request);
		 * if(flashMap!=null) { String message = (String)flashMap.get("resultMessage");
		 * model.addAttribute("resultMessage",message); }
		 */
		List<BoardDTO> blist = bService.selectAll();
		return blist;
	}
	//�Է�
//	@RequestMapping(value = "/boardInsert.do", method = RequestMethod.GET)
//	public String boardInsertView() {
//		logger.info("�Է�Form���̱� ");
//		return "board/boardInsert";
//	}
	@RequestMapping(value = "/boardInsert.do", method = RequestMethod.POST)
	public String boardInsertDB(@RequestBody BoardDTO board, RedirectAttributes attr, HttpServletRequest request) {
		logger.info("�Է�:" + board.toString());
		
//		MultipartFile uploadfile = board.getPhotos();
//		
//		if (uploadfile == null) return "redirect:/board/boardList.do"; 
//		String path = request.getSession().getServletContext().getRealPath("/resources/uploads"); 
//		String fileName = uploadfile.getOriginalFilename(); 
//		String fpath = path +"\\" + fileName ; 
//		board.setPic(fileName);
//		
//		try {
//			File file = new File(fpath); 
//			uploadfile.transferTo(file); 
//		} catch (IOException e) { e.printStackTrace(); }  

	
		int result = bService.insert(board);
		attr.addFlashAttribute("resultMessage", result + "�� �Է�");
		return result + " insert OK";
	}
	//����
	@RequestMapping(value = "/boardDetail.do/{boardid}", method = RequestMethod.GET)
	public BoardDTO boardDetailView(@PathVariable int boardid, Model model) {
		logger.info("�󼼺���:"+ boardid);
		BoardDTO board = bService.selectById(boardid);
		return board;
	}
	@RequestMapping(value = "/boardUpdate.do", method = RequestMethod.PUT,consumes = "application/json")
	public String boardDetailDB(@RequestBody BoardDTO board, RedirectAttributes attr) {
		logger.info("����:"+ board);
		int result = bService.update(board);
		attr.addFlashAttribute("resultMessage", board.getBno()+"���� ������");
		return board.getBno()+"���� ������";
	}
	//����
	@RequestMapping(value = "/boardDelete.do/{bno}", 
			method = RequestMethod.DELETE)
	public String boardDelete(@PathVariable Integer bno, RedirectAttributes attr) {
		logger.info("����:"+ bno);
		int result = bService.delete(bno);
		attr.addFlashAttribute("resultMessage", bno + "���� ������");
		return  bno + "���� ������";
	}
	
	//title�� ��ȸ
	@RequestMapping("/titleSearch.do")
	public String titleSearch(String title, Model model) {
 
		List<BoardDTO> blist = bService.selectByTitle(title==null||title==""?"":"%"+title+"%");
		model.addAttribute("boardDatas", blist);
		return "board/boardListFrame";
	}
	//writer�� ��ȸ
	@RequestMapping("/writerSearch.do")
	public String writerSearch(int writer, Model model) {
		List<BoardDTO> blist = bService.selectByWriter(writer);
		model.addAttribute("boardDatas", blist);
		return "board/boardListFrame";
	}
	
	//date�� ��ȸ�ϱ� 
	@RequestMapping("/dateSearch.do")
	public String dateSearch(Date sdate, Date edate, Model model) {
		List<BoardDTO> blist = bService.selectByRegDate(sdate, edate);
		model.addAttribute("boardDatas", blist);
		return "board/boardListFrame";
	}
	
	
}








