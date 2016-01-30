<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class App extends CI_Controller {

	public function ready(){
		$data = array(
			'result' =>true,
			'connect' =>true
			);
		echo json_encode($data);
	}

	public function signIn(){
		$this->load->library('session');
		$this->load->model('user');
		$username =	$this->input->post('param1');
		$password = $this->input->post('param2');
		$result = $this->user->loginAttempt($username, $password);
		if($result){
			$sess_array = array();
			foreach($result as $row){
				$username = $row->username;
				$sess_array = array(
					'id' => $row->id,
					'nik' => $row->nik,
					'username' => $row->username
				);
				$this->session->set_userdata($sess_array);
			}
			$data = array(
				'result' => true,
				'username' => $row->username
				);
		}else{
			$data = array(
				'result' => false
				);
		}
		echo json_encode($data);
	}

	public function signOut(){
		$this->load->library('session');
		$this->session->sess_destroy();
		$data = array(
			'result' => true,
		);
		echo json_encode($data);
	}
}
