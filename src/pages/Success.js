import { useEffect, useState } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function Success() {
  return (
    <>
      <div className="home1">
        <div className="filters1 summary mx-auto my-auto">
          <img
            src="https://image.freepik.com/free-vector/illustration-hand-making-ok-sign_53876-15713.jpg"
            className="imageSuccess mx-auto mt-5 mb-3"
            style={{ borderRadius: 10 }}
          />
          <div className="mx-auto mb-3">Terimakasih Telah Membeli</div>

          <div className="mx-auto ">
            <Link to="/">
              <Button type="button" >
                Kembali ke Halaman Utama
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Success;
