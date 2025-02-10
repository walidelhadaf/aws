provider "aws" {
  region = "eu-west-3"
}

resource "aws_instance" "web" {
  ami           = "ami-06e02ae7bdac6b938" # Mettre l'AMI officielle
  instance_type = "t2.micro"
  key_name      = "my-new-key"
  tags = {
    Name = "WebServer"
  }
}

resource "aws_db_instance" "mydb" {
  allocated_storage    = 20
  storage_type         = "gp2"
  engine              = "postgres"
  engine_version      = "12.22"
  instance_class      = "db.t3.micro"
  identifier          = "mydb-instance"
  username           = "root"
  password           = "password"
  publicly_accessible = true
  skip_final_snapshot = true
}
