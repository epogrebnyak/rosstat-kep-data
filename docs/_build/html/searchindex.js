Search.setIndex({envversion:47,filenames:["index","kep","kep.parser","kep.reader","kep.reader.tests","kep.word2csv","modules"],objects:{"":{kep:[1,0,0,"-"]},"kep.config":{TestPaths:[1,3,1,""],get_default_csv_path:[1,1,1,""],get_default_spec_folder:[1,1,1,""],get_mainspec_filepath:[1,1,1,""],level_up:[1,1,1,""],locate_additional_specs:[1,1,1,""],locate_mainspec:[1,1,1,""]},"kep.config.TestPaths":{test_default_dir:[1,2,1,""]},"kep.parser":{containers:[2,0,0,"-"],emitter:[2,0,0,"-"],test_containers:[2,0,0,"-"],test_datapoints:[2,0,0,"-"]},"kep.parser.containers":{DataBlock:[2,3,1,""],RowType:[2,3,1,""],State:[2,3,1,""],detect:[2,1,1,""],extract_label_from_headers:[2,1,1,""],fix_multitable_units:[2,1,1,""],get_blocks:[2,1,1,""],get_label_from_header:[2,1,1,""],get_unit:[2,1,1,""],get_year:[2,1,1,""],is_data_row:[2,1,1,""],is_year:[2,1,1,""],parse_section_name:[2,1,1,""],show_stats:[2,1,1,""],split_to_blocks:[2,1,1,""]},"kep.parser.containers.DataBlock":{label:[2,5,1,""]},"kep.parser.emitter":{Datapoints:[2,3,1,""],HashedValues:[2,3,1,""],datablock_to_stream:[2,1,1,""],key_hash:[2,1,1,""],yield_datapoints:[2,1,1,""]},"kep.parser.emitter.Datapoints":{emit:[2,2,1,""],is_included:[2,2,1,""],not_imported:[2,2,1,""],unique_varheads:[2,2,1,""],unique_varnames:[2,2,1,""],walk_by_blocks:[2,2,1,""]},"kep.parser.emitter.HashedValues":{duplicates:[2,2,1,""],error_duplicates:[2,2,1,""],items:[2,2,1,""],safe_duplicates:[2,2,1,""]},"kep.parser.test_datapoints":{TestDatapoints:[2,3,1,""],get_csv_data:[2,1,1,""],get_dfs:[2,1,1,""],get_parsing_def:[2,1,1,""]},"kep.parser.test_datapoints.TestDatapoints":{test_dataframes_simple:[2,2,1,""],test_dataframes_using_custom_splitter_func:[2,2,1,""],test_mixed_dataframes:[2,2,1,""]},"kep.reader":{csv_data:[3,0,0,"-"],files:[3,0,0,"-"],parsing_definitions:[3,0,0,"-"],tests:[4,0,0,"-"]},"kep.reader.csv_data":{CSV_Reader:[3,3,1,""],StringReader:[3,3,1,""],csv_doc_to_dicts:[3,1,1,""],csv_file_to_dicts:[3,1,1,""],doc_to_lists:[3,1,1,""],row_as_dict:[3,1,1,""],yield_dicts_from_file:[3,1,1,""],yield_dicts_from_string:[3,1,1,""],yield_rows_as_dicts:[3,1,1,""]},"kep.reader.csv_data.StringReader":{yield_dicts:[3,2,1,""]},"kep.reader.files":{File:[3,3,1,""],Tempfile:[3,3,1,""]},"kep.reader.files.File":{read_text:[3,2,1,""]},"kep.reader.files.Tempfile":{close:[3,2,1,""],name:[3,5,1,""]},"kep.reader.parsing_definitions":{Label:[3,3,1,""],ParsingDefinition:[3,3,1,""],StringAsYAML:[3,3,1,""],label_to_str:[3,1,1,""],make_label_from_list:[3,1,1,""]},"kep.reader.parsing_definitions.Label":{unit:[3,5,1,""],varname:[3,5,1,""]},"kep.reader.parsing_definitions.StringAsYAML":{check_parsed_yaml:[3,4,1,""],from_yaml:[3,4,1,""],unique_varheads:[3,2,1,""]},"kep.reader.tests":{test_csv_data:[4,0,0,"-"],test_files:[4,0,0,"-"],test_parsing_definitions:[4,0,0,"-"]},"kep.reader.tests.test_csv_data":{Match_CSV_Content:[4,3,1,""],TestCSV_Default_DataSource:[4,3,1,""],TestCSV_Reader:[4,3,1,""],TestCSV_yield_from_string:[4,3,1,""],Test_doc_to_lists:[4,3,1,""],Test_row_as_dict:[4,3,1,""]},"kep.reader.tests.test_csv_data.Match_CSV_Content":{setUp:[4,2,1,""],test_sample_dict_and_rows_lengths:[4,2,1,""]},"kep.reader.tests.test_csv_data.TestCSV_Default_DataSource":{setUp:[4,2,1,""],test_reading_default_csv:[4,2,1,""]},"kep.reader.tests.test_csv_data.TestCSV_Reader":{make_file:[4,4,1,""],setUp:[4,2,1,""],tearDown:[4,2,1,""],test_csv_dummy_content_reading_as_class:[4,2,1,""]},"kep.reader.tests.test_csv_data.TestCSV_yield_from_string":{test_yield_from_string:[4,2,1,""]},"kep.reader.tests.test_csv_data.Test_doc_to_lists":{test_doc_to_lists:[4,2,1,""]},"kep.reader.tests.test_csv_data.Test_row_as_dict":{setUp:[4,2,1,""],test_datarow_head_and_data:[4,2,1,""],test_textrow_head:[4,2,1,""]},"kep.reader.tests.test_files":{Test_TempFile_File:[4,3,1,""]},"kep.reader.tests.test_files.Test_TempFile_File":{test_read_lines_separated_by_signle_newline:[4,2,1,""],test_read_one_line:[4,2,1,""]},"kep.reader.tests.test_parsing_definitions":{Test_Get_Definitions:[4,3,1,""],Test_ParsingDefintion:[4,3,1,""],Test_StringAsYAML:[4,3,1,""]},"kep.reader.tests.test_parsing_definitions.Test_Get_Definitions":{test_main_specification_file_exists:[4,2,1,""]},"kep.reader.tests.test_parsing_definitions.Test_ParsingDefintion":{filename_to_content:[4,4,1,""],make_file:[4,4,1,""],setUp:[4,2,1,""],tearDown:[4,2,1,""],test_fail_no_parsing_definition_with_Label:[4,2,1,""],test_string_to_file_to_content:[4,2,1,""]},"kep.reader.tests.test_parsing_definitions.Test_StringAsYAML":{read_and_check:[4,4,1,""],string_to_content:[4,4,1,""],test_attributes:[4,2,1,""],test_read_yaml_and_check:[4,2,1,""],test_yaml_string_to_content:[4,2,1,""]},"kep.release":{get_actual_csv_dicts_for_testing:[1,1,1,""],get_csv_dicts:[1,1,1,""],get_pdef:[1,1,1,""],is_valid_month:[1,1,1,""],is_valid_year:[1,1,1,""]},"kep.spam":{Foo:[1,3,1,""]},"kep.test_release":{DatapointsFromActualDataset:[1,3,1,""],TestDatapoints_Array_Length_Long_Enough:[1,3,1,""],TestDatapoints_Include_ManyDatapoints_for_2016_Annual_Data:[1,3,1,""],TestDatapoints_Includes_FirstDatapoint:[1,3,1,""]},"kep.test_release.DatapointsFromActualDataset":{setUp:[1,2,1,""]},"kep.test_release.TestDatapoints_Array_Length_Long_Enough":{test_positive:[1,2,1,""]},"kep.test_release.TestDatapoints_Include_ManyDatapoints_for_2016_Annual_Data":{test_negative:[1,2,1,""],test_positive:[1,2,1,""]},"kep.test_release.TestDatapoints_Includes_FirstDatapoint":{test_positive:[1,2,1,""]},kep:{config:[1,0,0,"-"],parser:[2,0,0,"-"],reader:[3,0,0,"-"],release:[1,0,0,"-"],spam:[1,0,0,"-"],test_release:[1,0,0,"-"],word2csv:[5,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","method","Python method"],"3":["py","class","Python class"],"4":["py","staticmethod","Python static method"],"5":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:function","2":"py:method","3":"py:class","4":"py:staticmethod","5":"py:attribute"},terms:{"\u0432":3,"\u0432\u0432\u043f":3,"\u0433\u043e\u0434\u0430":3,"\u0434\u0435\u043d\u0435\u0436\u043d\u044b\u043c\u0438":2,"\u0434\u043e\u0445\u043e\u0434\u0430\u043c\u0438":2,"\u0438\u043d\u0434\u0435\u043a\u0441":3,"\u043a":3,"\u043d\u0430\u0441\u0435\u043b\u0435\u043d\u0438\u044f":2,"\u043d\u0430\u0447\u0430\u043b\u0430":3,"\u043e\u0431\u044a\u0435\u043c":3,"\u043e\u0442\u0447\u0435\u0442\u043d\u043e\u0433\u043e":3,"\u043f\u0435\u0440\u0438\u043e\u0434":3,"\u043f\u0435\u0440\u0438\u043e\u0434\u0443":3,"\u043f\u043e\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u0438":2,"\u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u0433\u043e":3,"\u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u043c\u0443":3,"\u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u0430":3,"\u043f\u0440\u043e\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u043e\u0433\u043e":3,"\u0441":[2,3],"\u0441\u0432\u043e\u0434\u043d\u044b\u0435":2,"\u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u043c\u0443":3,"\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u043e\u0441\u0442\u044c":2,"_content":4,"_dir":1,"_filenam":4,"_list":3,"_string":4,"case":[1,2,4],"class":[1,2,3,4],"default":2,"enum":2,"function":[2,3],"import":4,"int":2,"null":3,"return":[1,2,3],"static":[3,4],"true":2,access:3,accord:2,addit:[1,2],after:3,alia:3,all_label:3,ana:2,ani:2,annual:2,attribut:3,base:[1,2,3,4],below:[2,3],between:2,bln_rub:3,block:2,bool:2,bot:2,built:[2,3],canada:2,cell:2,check:[2,3],check_parsed_yaml:3,close:3,comment:[2,3],config:[],contain:[],content:[],content_str:[3,4],copi:2,csv:[1,2,3,4],csv_content_1:2,csv_content_2:2,csv_content_3:2,csv_data:[],csv_dict:2,csv_doc_to_dict:3,csv_file_to_dict:3,csv_reader:3,custom:3,data:[1,3,4],datablock:2,datablock_to_stream:2,datafram:2,datapoint:2,datapointsfromactualdataset:1,datarow:2,definit:[1,2],detect:2,dict:[2,3],dictionari:[2,3],dirti:3,doc:3,doc_to_list:3,dog:2,duplic:2,element:3,emit:2,emitt:[],empti:3,end:3,end_lin:3,eol:3,error_dupl:2,exampl:2,expos:3,extract:2,extract_label_from_head:2,feed:2,field:3,file:[],filename_to_cont:4,filepath:1,first:3,fix_multitable_unit:2,fixtur:4,folder:1,foo:1,format:[2,3],found:1,freq:2,from:[2,3],from_yaml:3,gdp:3,gdp_yoi:2,gen:3,gener:2,get:1,get_actual_csv_dicts_for_test:1,get_block:2,get_csv_data:2,get_csv_dict:1,get_default_csv_path:1,get_default_spec_fold:1,get_df:2,get_label_from_head:2,get_mainspec_filepath:1,get_parsing_def:2,get_pdef:1,get_unit:2,get_year:2,hardcod:2,hashedvalu:2,have:2,head:3,header:[2,3],ind_prod:3,index:0,individu:2,input_csv:2,instruct:3,invalid:2,is_data_row:2,is_includ:2,is_valid_month:1,is_valid_year:1,is_year:2,item:2,iter:[2,3],kei:[2,3],key_hash:2,label:[2,3],label_to_str:3,level_up:1,like:[2,3],line:[2,3],list:[1,2,3],localfil:3,locate_additional_spec:1,locate_mainspec:1,mai:2,main:1,make_fil:4,make_label_from_list:3,match:2,match_csv_cont:4,methodnam:[1,2,4],mimic:3,mock:1,modul:[],month:1,monthli:2,name:[2,3],need:2,next:3,non:3,none:2,nonetyp:2,not_import:2,number:3,object:[1,2,3],packag:[],page:0,param:2,paramet:2,pars:[1,3],parse_def:2,parse_section_nam:2,parser:[],parsing_definit:[],parsingdefinit:3,path:[1,3],pattern:2,pdef:2,plausibl:2,present:2,previou:2,prvio:2,quarterli:2,rang:2,raw:3,read:3,read_and_check:4,read_text:3,reader:[],reader_func:3,readi:2,recycl:2,releas:[],repres:3,rog:3,row:[2,3],row_as_dict:3,row_tupl:2,rowtyp:2,runtest:[1,2,4],safe_dupl:2,scope:3,search:0,section:[2,3],self:2,setup:[1,4],show_stat:2,some:2,someth:3,sourc:[1,2,3,4],spam:[],special:[2,3],specif:3,split:3,split_to_block:2,splitter_func:2,start:3,start_lin:3,state:2,str:[2,3],stream:[2,3],string:[2,3,4],string_to_cont:4,stringasyaml:3,stringread:3,structur:3,submodul:[],subpackag:[],tab:3,tat:2,teardown:4,tempfil:3,test:[],test_attribut:4,test_contain:[],test_csv_data:[],test_csv_dummy_content_reading_as_class:4,test_dataframes_simpl:2,test_dataframes_using_custom_splitter_func:2,test_datapoint:[],test_datarow_head_and_data:4,test_default_dir:1,test_doc_to_list:4,test_fail_no_parsing_definition_with_label:4,test_fil:[],test_get_definit:4,test_main_specification_file_exist:4,test_mixed_datafram:2,test_neg:1,test_parsing_definit:[],test_parsingdefint:4,test_posit:1,test_read_lines_separated_by_signle_newlin:4,test_read_one_lin:4,test_read_yaml_and_check:4,test_reading_default_csv:4,test_releas:[],test_row_as_dict:4,test_sample_dict_and_rows_length:4,test_string_to_file_to_cont:4,test_stringasyaml:4,test_tempfile_fil:4,test_textrow_head:4,test_yaml_string_to_cont:4,test_yield_from_str:4,testcas:[1,2,4],testcsv_default_datasourc:4,testcsv_read:4,testcsv_yield_from_str:4,testdatapoint:2,testdatapoints_array_length_long_enough:1,testdatapoints_include_manydatapoints_for_2016_annual_data:1,testdatapoints_includes_firstdatapoint:1,testpath:1,text:[2,3],textlin:2,those:2,tupl:[2,3],two:2,type:2,union:2,unique_varhead:[2,3],unique_varnam:2,unit:3,unittest:[1,2,4],unknown:2,usag:3,usus:3,valu:2,variabl:4,varibal:4,varnam:[2,3],version:1,walk_by_block:2,which:2,word2csv:[],word:[],yaml:[2,3],yaml_cont:2,yaml_content_1:2,yaml_content_2:2,yaml_str:[3,4],year:[1,2,3],yield:[2,3],yield_datapoint:2,yield_dict:3,yield_dicts_from_fil:3,yield_dicts_from_str:3,yield_rows_as_dict:3,yoi:3,ytd:3},titles:["Welcome to kep&#8217;s documentation!","kep package","kep.parser package","kep.reader package","kep.reader.tests package","kep.word2csv package","kep"],titleterms:{config:1,contain:2,content:[1,2,3,4,5],csv_data:3,document:0,emitt:2,file:3,indic:0,kep:[0,1,2,3,4,5,6],modul:[1,2,3,4,5],packag:[1,2,3,4,5],parser:2,parsing_definit:3,reader:[1,3,4],releas:1,spam:1,submodul:[1,2,3,4,5],subpackag:[1,3],tabl:0,test:4,test_contain:2,test_csv_data:4,test_datapoint:2,test_fil:4,test_parsing_definit:4,test_releas:1,welcom:0,word2csv:5,word:5}})