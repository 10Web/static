'use strict';
const assert = require('power-assert');
const request = require('supertest');
const app = require('./env');

describe('test_ctrl.js', () => {
  before(() => {
    app.run(() => {}, {port: 0});
  });
  describe('# helloText', () => {
    it(`get ${app.config.prefix}/api/hello_text should response data`, (done) => {
      request(app.express)
        .get(app.config.prefix + '/api/hello_text')
        .expect('Content-Type', /text\/plain/)
        .expect(200)
        .expect((res) => {
          assert(res.text === 'hello');
        })
        .end(done);
    });
  });
  describe('# welcomeTpl', () => {
    it(`get ${app.config.prefix} should response data`, (done) => {
      request(app.express)
        .get(app.config.prefix)
        .expect('Content-Type', /text\/html/)
        .expect(200)
        .end(done);
    });
  });
  describe('# helloOrigin', () => {
    it(`get ${app.config.prefix}/api/hello_origin should response data`, (done) => {
      request(app.express)
        .get(app.config.prefix + '/api/hello_origin')
        .expect(200)
        .expect('hello')
        .end(done);
    });
  });
  describe('# helloGen', () => {
    it(`get ${app.config.prefix}/api/hello_gen should response data`, (done) => {
      request(app.express)
        .get(app.config.prefix + '/api/hello_gen')
        .expect('Content-Type', /json/)
        .expect(200)
        .expect({code: 'SUCCESS', data: 'hello'})
        .end(done);
    });
  });

  after(() => {
    process.exit();
  });
});
