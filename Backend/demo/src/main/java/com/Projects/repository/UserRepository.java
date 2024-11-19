package com.Projects.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Projects.model.User;

public interface UserRepository extends JpaRepository<User, Long>{

}
