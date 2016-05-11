describe('app', function () {
    'use strict';

    var app = window.app;

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
    });

    //new test
    it('should return age value 16', function () {
        expect(app.assignToSwimmingCourse('Sonja', '10/04/2000')).toEqual({
        name: 'Sonja', age: 19, course: 'kids'});
    });
    it('should return adults as course value', function () {
        expect(app.assignToSwimmingCourse('Shai', '11/05/1994')).toEqual({
        name: 'Shai', age:22, course: 'adults'
    });
});
    describe('calculateArea', function () {
        it('should return area of figure & message', function () {
            expect(app.calculateArea(6,1,3,'Succes', 'Fail')).toEqual({area: 3, message: 'Succes'});
            expect(app.calculateArea(2,6,6,'Succes', 'Fail')).toEqual({area: -6, message: 'Fail'});
            it('should return area of figure & message', function () {
                expect(app.calculateArea("",1,'','Succes', 'Fail')).toEqual(false);
            });
            it('should return area 0 & message "Big null"', function () {
                expect(app.calculateArea(0,0,0,'Succes', 'Fail')).toEqual({area: 0, message:'Big null'});
            });
        });
    });
});


