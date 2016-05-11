describe('app', function () {
    'use strict';

    var app = window.app;
    var answer = window.app;

    describe('assignToSwimmingCourse', function () {
        it('should assign adult person to adult group', function () {
            expect(app.assignToSwimmingCourse('Jack', '10/10/1995')).toEqual({
                name: 'Jack', age: 20, course: 'adults'
            });
        });
        it('should assign person between the ages of 12 - 17 to teens group', function () {
            expect(app.assignToSwimmingCourse('John', '07/10/2001')).toEqual({
                name: 'John', age: 14, course: 'teens'
            });
        });
        it('should assign person below 12 to kids group', function () {
            expect(app.assignToSwimmingCourse('Zack', '10/06/2010')).toEqual({
                name: 'Zack', age: 5, course: 'kids'
            });
        });


        it('return false date STRING', function () {
            expect(app.assignToSwimmingCourse('Jack', '12/12/2010')).toEqual({
                name: 'Jack', age: 5, course: 'kids'
            });
        });
        it('return age 20', function () {
            expect(app.assignToSwimmingCourse('Jack', '10/06/2010')).toEqual({
                name: 'Jack', age: 5, course: 'kids'
            });
        });
        it('return adults', function () {
            expect(app.assignToSwimmingCourse('John', '07/10/2001')).toEqual({
                name: 'John', age: 14, course: 'teens'
            });
        });
    });

    describe('calculateArea', function () {
        it('a, b, c are proper', function () {
          expect(app.calculateArea(15, 10, 0, 'good', 'bad')).toEqual({ area : 15, message : 'good' });
        });
        it('insert 0 as first and last value', function () {
           expect(app.calculateArea(0, 10, 0, 'good', 'bad')).toEqual({ area : 10, message : 'good' });
        });
        it('return good', function () {
           expect(app.calculateArea(-40, 10, 5, 'good', 'bad')).toEqual({ area : 210, message : 'good' });
        });
    });    

});


