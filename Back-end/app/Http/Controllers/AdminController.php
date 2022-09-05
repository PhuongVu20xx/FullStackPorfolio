<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Str;
use File;
use Illuminate\Support\Facades\DB;

class AdminController extends Controller
{
    //account
    public function UpdateAccountInfo(Request $request)
    {
        $id = $request->id;
        $name = $request->name;
        $email = $request->email;
        $phone = $request->phone;
        $dob = $request->dob;
        $address = $request->address;
        $information = $request->information;
        $partner = $request->partner;
        $gender = $request->gender;

        DB::select("Update account 
                    set name = '".$name."',email = '".$email."',phone = '".$phone."',dob = '".$dob.
                    "',address = '".$address."',information = '".$information."',partner = '".$partner. 
                    "', gender = '".$gender."' where id = ".$id);

        $exists = DB::select("select * from account where id = ".$id);
        return count($exists);
    }

    public function ChangeAccountAvatar(Request $request)
    {
        $avatar_name = time().'-'.'user'.$request->img_extension;
        $id = $request->id;
        DB::select("Update account 
                    set avatar = '".$avatar_name.
                    "' where id = ".$id);
        
        $avatar = $request->file('avatar');
        $avatar->move(public_path('Images'), $avatar_name);

        File::delete(public_path('Images/'.$request->avatar_name));

        $exists = DB::select("select * from account where id = ".$id);
        return count($exists);
    }

    public function ChangeAccountPassword(Request $request)
    {
        $password = $request->new_password;
        $id = $request->id;
        DB::select("Update account 
                    set password = '".$password.
                    "' where id = ".$id);
        $exists = DB::select("select * from account where id = ".$id." and password = '".$password."'");
        return count($exists);
    }

    public function SelectAccountInfo()
    {
        $tmp = DB::select("select * from account where id = 1");

        foreach($tmp as $account)
        {
            return $account;
        }
    }

    //project 
    public function AddNewProject(Request $request)
    {
        $working_time = $request->working_time;
        $name = $request->name;
        $position = $request->position;
        $project_type = $request->project_type;
        $information = $request->information;
        $main_works = $request->main_works;
        $source_code = $request->source_code;
        $link_web = $request->link_web;
        $solfware = $request->solfware;
        $thumbnail_name = time().'-'.'project'.$request->img_extension;
        
        $exists = DB::select("select * from project where name = '".$name."'");
        
        if(count($exists) <= 0)
        {
            DB::insert("insert into project (working_time,name,position,project_type,information,main_works,source_code,link_web,solfware,thumbnail_name) 
            values (?,?,?,?,?,?,?,?,?,?)",[$working_time,$name,$position,$project_type,$information,$main_works,$source_code,$link_web,$solfware,$thumbnail_name]);
            $thumbnail = $request->file('thumbnail');
            $thumbnail->move(public_path('Images'), $thumbnail_name);
            return 1;
        }
        return 0;
    }

    public function UpdateProjectInfo(Request $request)
    {
        $id = $request->id;
        $working_time = $request->working_time;
        $name = $request->name;
        $position = $request->position;
        $project_type = $request->project_type;
        $information = $request->information;
        $main_works = $request->main_works;
        $source_code = $request->source_code;
        $link_web = $request->link_web;
        $solfware = $request->solfware;

        DB::select("Update project 
                    set working_time = '".$working_time."',name = '".$name."',position = '".$position."',project_type = '".$project_type.
                    "',information = '".$information."',main_works = '".$main_works."',source_code = '".$source_code."',link_web = '".$link_web.  
                    "',solfware = '".$solfware."' where id = ".$id);

        $exists = DB::select("select * from project where id = ".$id);
        return count($exists);
    }

    public function ChangeProjectThumnail(Request $request)
    {
        $id = $request->id;
        $old_thumbnail = $request->thumbnail_name;
        $thumbnail_name = time().'-'.'project'.$request->img_extension;
        $thumbnail = $request->file('thumbnail');

        DB::select("Update project 
                    set thumbnail_name = '".$thumbnail_name.
                    "' where id = ".$id);
        $thumbnail->move(public_path('Images'), $thumbnail_name);
        File::delete(public_path('Images/'.$old_thumbnail));

        $exists = DB::select("select * from project where id = ".$id);
        return count($exists);
    }

    public function ChangeProjectStatus(Request $request)
    {
        $id = $request->id;
        $status = $request->status;
        
        DB::select("Update project 
                    set status = '".$status.
                    "' where id = ".$id);
        $exists = DB::select("select * from project where id = ".$id.
                                " and status = '".$status."'");
        return count($exists);
    }

    public function SelectProject()
    {
        return DB::select("select * from project order by id desc");
    }
    
    //page setting
    public function UpdatePageSettings(Request $request)
    {
        $title_color = $request->title_color;
        $content_color = $request->content_color;
        $link_color = $request->link_color;
        $background_color = $request->background_color;
        $header_color = $request->header_color;
        $footer_color = $request->footer_color;
        $main_color = $request->main_color;

        $img_extension = $request->img_extension;
        $old_background_image = $request->old_background_image;

        if($img_extension == "")
        {
            DB::select("Update page_settings 
                    set title_color = '".$title_color."',content_color = '".$content_color.
                    "',link_color = '".$link_color."',background_color = '".$background_color."',header_color = '".$header_color.
                    "',footer_color = '".$footer_color."',main_color = '".$main_color."' where id = 1");
            return 1;
        }
        else{
            $background_image = time().'-'.'background-image'.$img_extension;
            $background = $request->file('background-image');
            $background->move(public_path('Images'), $background_image);
            File::delete(public_path('Images/'.$old_background_image));

            DB::select("Update page_settings 
                    set background_image = '".$background_image."',title_color = '".$title_color."',content_color = '".$content_color.
                    "',link_color = '".$link_color."',background_color = '".$background_color."',header_color = '".$header_color.
                    "',footer_color = '".$footer_color."',main_color = '".$main_color."' where id = 1");
            return 1;
        }
        
        return 0;
    }

    public function SelectPageSetting()
    {
        $tmp = DB::select("select * from page_settings");
        foreach($tmp as $setting)
        {
            return $setting;
        }
        return 0;
    }


    //videos
    public function AddNewVideo(Request $request)
    {
        $source = $request->source;
        $project_id = $request->project_id;

        $exists = DB::select("select * from videos where source = '".$source."'");
        if(count($exists) <= 0)
        {
            DB::select("insert into videos(source,project_id)
                     values (?,?)", 
                     [$source, $project_id]);
            return 1;
        }
        return 0;
    }

    public function ChangeVideoStatus(Request $request)
    {
        $id = $request->id;
        $status = $request->status;

        DB::select("Update videos 
                    set status = '".$status.
                    "' where id = ".$id);
        $exists = DB::select("select * from videos where id = ".$id.
                                " and status = '".$status."'");
        return count($exists);
    }

    public function DeleteVideo(Request $request)
    {
        $id = $request->id;
        DB::select("delete from videos where id = ".$id);

        $exists = DB::select("select * from videos where id = ".$id);

        if(count($exists) <= 0)
        {
            return 1;
        }
        return 0;
    }

    public function SelectVideos()
    {
        return DB::select("select * from videos order by id desc");
    }

    //images
    public function AddNewImage(Request $request)
    {
        $image_name = time().'-'.'image'.$request->img_extension;
        $project_id = $request->project_id;

        $exists = DB::select("select * from images where image = '".$image_name."'");
        if(count($exists) <= 0)
        {
            DB::select("insert into images(image,project_id)
                     values (?,?)", 
                     [$image_name, $project_id]);
            $image = $request->file('image');
            $image->move(public_path('Images'), $image_name);
            return 1;
        }
        return 0;
    }

    public function ChangeImageStatus(Request $request)
    {
        $id = $request->id;
        $status = $request->status;

        DB::select("Update images 
                    set status = '".$status.
                    "' where id = ".$id);
        $exists = DB::select("select * from images where id = ".$id.
                                " and status = '".$status."'");
        return count($exists);
    }

    public function DeleteImage(Request $request)
    {
        $id = $request->id;
        DB::select("delete from images where id = ".$id);

        $exists = DB::select("select * from images where id = ".$id);

        if(count($exists) <= 0)
        {
            return 1;
        }
        return 0;
    }

    public function SelectImages()
    {
        return DB::select("select * from images order by id desc");
    }

    //experient
    public function AddNewExperient(Request $request)
    {
        $work_place = $request->work_place;
        $work_time = $request->work_time;
        $position = $request->position;
        $experient = $request->experient;

        $exists = DB::select("select * from experients where work_place = '".$work_place."'");
        if(count($exists) <= 0)
        {
            DB::select("insert into experients(work_place,work_time,position,experient)
                     values (?,?,?,?)", 
                     [$work_place, $work_time,$position,$experient]);
            return 1;
        }
        return 0;
    }

    public function ChangeExperientStatus(Request $request)
    {
        $id = $request->id;
        $status = $request->status;

        DB::select("Update experients 
                    set status = '".$status.
                    "' where id = ".$id);
        $exists = DB::select("select * from experients where id = ".$id.
                                " and status = '".$status."'");
        return count($exists);
    }

    public function DeleteExperient(Request $request)
    {
        $id = $request->id;
        DB::select("delete from experients where id = ".$id);

        $exists = DB::select("select * from experients where id = ".$id);

        if(count($exists) <= 0)
        {
            return 1;
        }
        return 0;
    }

    public function SelectExperients()
    {
        return DB::select("select * from experients order by id desc");
    }

    //information
    public function AddNewInformation(Request $request)
    {
        $info = $request->info;

        $exists = DB::select("select * from information where info = '".$info."'");
        if(count($exists) <= 0)
        {
            DB::select("insert into information(info)
                     values (?)", 
                     [$info]);
            return 1;
        }
        return 0;
    }

    public function ChangeInformationStatus(Request $request)
    {
        $id = $request->id;
        $status = $request->status;

        DB::select("Update information 
                    set status = '".$status.
                    "' where id = ".$id);
        $exists = DB::select("select * from information where id = ".$id.
                                " and status = '".$status."'");
        return count($exists);
    }

    public function DeleteInformation(Request $request)
    {
        $id = $request->id;
        DB::select("delete from information where id = ".$id);

        $exists = DB::select("select * from information where id = ".$id);

        if(count($exists) <= 0)
        {
            return 1;
        }
        return 0;
    }

    public function SelectInformations()
    {
        return DB::select("select * from information order by id desc");
    }

    //education
    public function AddNewEducation(Request $request)
    {
        $school = $request->school;
        $learn_time = $request->learn_time;
        $course = $request->course;
        $info = $request->info;

        $exists = DB::select("select * from education where school = '".$school."'");
        if(count($exists) <= 0)
        {
            DB::select("insert into education(school,learn_time,course,info)
                     values (?,?,?,?)", 
                     [$school, $learn_time,$course,$info]);
            return 1;
        }
        return 0;
    }

    public function ChangeEducationStatus(Request $request)
    {
        $id = $request->id;
        $status = $request->status;

        DB::select("Update education 
                    set status = '".$status.
                    "' where id = ".$id);
        $exists = DB::select("select * from education where id = ".$id.
                                " and status = '".$status."'");
        return count($exists);
    }

    public function DeleteEducation(Request $request)
    {
        $id = $request->id;
        DB::select("delete from education where id = ".$id);

        $exists = DB::select("select * from education where id = ".$id);

        if(count($exists) <= 0)
        {
            return 1;
        }
        return 0;
    }

    public function SelectEducations()
    {
        return DB::select("select * from education order by id desc");
    }

    //skill
    public function AddNewSkill(Request $request)
    {
        $name = $request->name;
        $ranking = $request->ranking;

        $exists = DB::select("select * from skills where name = '".$name."'");
        if(count($exists) <= 0)
        {
            DB::select("insert into skills(name,ranking)
                     values (?,?)", 
                     [$name, $ranking]);
            return 1;
        }
        return 0;
    }

    public function ChangeSkillStatus(Request $request)
    {
        $id = $request->id;
        $status = $request->status;

        DB::select("Update skills 
                    set status = '".$status.
                    "' where id = ".$id);
        $exists = DB::select("select * from skills where id = ".$id.
                                " and status = '".$status."'");
        return count($exists);
    }

    public function DeleteSkill(Request $request)
    {
        $id = $request->id;
        DB::select("delete from skills where id = ".$id);

        $exists = DB::select("select * from skills where id = ".$id);

        if(count($exists) <= 0)
        {
            return 1;
        }
        return 0;
    }

    public function SelectSkills()
    {
        return DB::select("select * from skills order by id desc");
    }

    //landingpage

    public function ShowProjects()
    {
        return DB::select("select * from project where status = '1' order by id desc");
    }

    public function ShowExperients()
    {
        return DB::select("select * from experients where status = '1' order by id desc");
    }

    public function ShowInformation()
    {
        return DB::select("select * from information where status = '1' order by id desc");
    }

    public function ShowEducation()
    {
        return DB::select("select * from education where status = '1' order by id desc");
    }

    public function ShowSkills()
    {
        return DB::select("select * from skills where status = '1' order by id desc");
    }

    public function SelectedProjectVideos(Request $request)
    {
        $id = $request->id;
        return DB::select("select * from videos where status = '1' and project_id = ".$id." order by id desc");
    }

    public function SelectedProjectImages(Request $request)
    {
        $id = $request->id;
        return DB::select("select * from images where status = '1' and project_id = ".$id." order by id desc");
    }

    public function ChangeBackground(Request $request)
    {
        $background_name = time().'-'.'background'.$request->img_extension;
        $id = $request->id;
        DB::select("Update account 
                    set background = '".$background_name.
                    "' where id = ".$id);
        
        $background = $request->file('background');
        $background->move(public_path('Files'), $background_name);

        File::delete(public_path('Files/'.$request->background_name));

        $exists = DB::select("select * from account where id = ".$id);
        return count($exists);
    }

    public function ChangeCV(Request $request)
    {
        $cv_name = 'vxp-cv'.$request->img_extension;
        $id = $request->id;
        DB::select("Update account 
                    set cv = '".$cv_name.
                    "' where id = ".$id);
        
        $cv = $request->file('cv');
        $cv->move(public_path('Files'), $cv_name);

        File::delete(public_path('Files/'.$request->cv_name));

        $exists = DB::select("select * from account where id = ".$id);
        return count($exists);
    }

    public function Login(Request $request)
    {
        $email = $request->email;
        $password = $request->password;

        $exists = DB::select("select * from account where email = '".$email."' and password = '".$password."'");

        if(count($exists) > 0)
        {
            foreach($exists as $account)
            {
                return $account;
            }
        }
        return 0;
    }

    public function ChangeTitleColor(Request $request)
    {
        $id = $request->id;
        $title_color = $request->color;

        DB::select("Update account 
                    set title_color = '".$title_color.
                    "' where id = ".$id);

        $exists = DB::select("select * from account where id = ".$id." and title_color = '".$title_color."'");

        if(count($exists) > 0)
        {
            foreach($exists as $account)
            {
                return $account;
            }
        }
        return 0;
    }

    public function ChangeLableColor(Request $request)
    {
        $id = $request->id;
        $lable_color = $request->color;
        DB::select("Update account 
                    set title_color = '".$lable_color.
                    "' where id = ".$id);
                    $exists = DB::select("select * from account where id = ".$id." and title_color = '".$lable_color."'");

        if(count($exists) > 0)
        {
            foreach($exists as $account)
            {
                return $account;
            }
        }
        return 0;
    }

    public function ChangeTextColor(Request $request)
    {
        $id = $request->id;
        $text_color = $request->color;

        DB::select("Update account 
            set content_color = '".$text_color.
            "' where id = ".$id);

            $exists = DB::select("select * from account where id = ".$id." and content_color = '".$text_color."'");

        if(count($exists) > 0)
        {
            foreach($exists as $account)
            {
                return $account;
            }
        }
        return 0;
    }
}
