terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region  = "us-west-2"
}

resource "aws_instance" "app_server" {
  ami           = "ami-830c94e3"
  instance_type = "t2.micro"
  disable_api_termination = true
  root_block_device {
    encrypted = true
  }
  tags = {
    Name = "ucrew-app-instance"
  }
  metadata_options {
    http_tokens = "required"
  }
}
