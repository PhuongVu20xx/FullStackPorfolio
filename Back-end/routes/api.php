<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/updateaccountinfo',[AdminController::class, 'UpdateAccountInfo']);
Route::post('/changeaccountavatar',[AdminController::class, 'ChangeAccountAvatar']);
Route::post('/changeaccountpassword',[AdminController::class, 'ChangeAccountPassword']);
Route::post('/selectaccountinfo',[AdminController::class, 'SelectAccountInfo']);

Route::post('/updatepagesettings',[AdminController::class, 'UpdatePageSettings']);
Route::post('/selectpagesettings',[AdminController::class, 'SelectPageSetting']);

Route::post('/addnewproject',[AdminController::class, 'AddNewProject']);
Route::post('/updateprojectinfo',[AdminController::class, 'UpdateProjectInfo']);
Route::post('/changeprojectthumbnail',[AdminController::class, 'ChangeProjectThumnail']);
Route::post('/changeprojectstatus',[AdminController::class, 'ChangeProjectStatus']);
Route::post('/selectproject',[AdminController::class, 'SelectProject']);

Route::post('/addnewvideo',[AdminController::class, 'AddNewVideo']);
Route::post('/changevideostatus',[AdminController::class, 'ChangeVideoStatus']);
Route::post('/deletevideo',[AdminController::class, 'DeleteVideo']);
Route::post('/selectvideos',[AdminController::class, 'SelectVideos']);

Route::post('/addnewimage',[AdminController::class, 'AddNewImage']);
Route::post('/changeimagestatus',[AdminController::class, 'ChangeImageStatus']);
Route::post('/deleteimage',[AdminController::class, 'DeleteImage']);
Route::post('/selectimages',[AdminController::class, 'SelectImages']);

Route::post('/addnewexperient',[AdminController::class, 'AddNewExperient']);
Route::post('/changeexperientstatus',[AdminController::class, 'ChangeExperientStatus']);
Route::post('/deleteexperient',[AdminController::class, 'DeleteExperient']);
Route::post('/selectexperients',[AdminController::class, 'SelectExperients']);

Route::post('/addnewinformation',[AdminController::class, 'AddNewInformation']);
Route::post('/changeinformationtatus',[AdminController::class, 'ChangeInformationStatus']);
Route::post('/deleteinformation',[AdminController::class, 'DeleteInformation']);
Route::post('/selectinformations',[AdminController::class, 'SelectInformations']);

Route::post('/addneweducation',[AdminController::class, 'AddNewEducation']);
Route::post('/changeeducationstatus',[AdminController::class, 'ChangeEducationStatus']);
Route::post('/deleteeducation',[AdminController::class, 'DeleteEducation']);
Route::post('/selecteducations',[AdminController::class, 'SelectEducations']);

Route::post('/addnewskill',[AdminController::class, 'AddNewSkill']);
Route::post('/changeskillstatus',[AdminController::class, 'ChangeSkillStatus']);
Route::post('/deleteskill',[AdminController::class, 'DeleteSkill']);
Route::post('/selectskills',[AdminController::class, 'SelectSkills']);

Route::post('/showprojects',[AdminController::class, 'ShowProjects']);
Route::post('/showexperients',[AdminController::class, 'ShowExperients']);
Route::post('/showinformation',[AdminController::class, 'ShowInformation']);
Route::post('/showeducation',[AdminController::class, 'ShowEducation']);
Route::post('/showskills',[AdminController::class, 'ShowSkills']);
Route::post('/selecttedprojectvideos',[AdminController::class, 'SelectedProjectVideos']);
Route::post('/selectedprojectimages',[AdminController::class, 'SelectedProjectImages']);
Route::post('/changebackground',[AdminController::class, 'ChangeBackground']);
Route::post('/changecv',[AdminController::class, 'ChangeCV']);
Route::post('/login',[AdminController::class, 'Login']);
Route::post('/changetitlecolor',[AdminController::class, 'ChangeTitleColor']);
Route::post('/changecontentcolor',[AdminController::class, 'ChangeContentColor']);






