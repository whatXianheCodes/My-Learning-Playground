package com.blossified.fastplanner;

import android.support.v7.app.ActionBarActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.Gravity;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.TextView;

import java.util.ArrayList;
import java.util.List;


public class MainActivity extends ActionBarActivity {

    private static final String TAG = "MainActivity";
    private List<String> toDoList;
    private ListView content;
    private ArrayAdapter<String> adapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        toDoList = new ArrayList<String>();
        content = (ListView)findViewById(R.id.content);
        defaultEmpty();
    }


    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }
        if(id == R.id.clear) {
            toDoList.clear();
            adapter.notifyDataSetChanged();
        }

        return super.onOptionsItemSelected(item);
    }

    private void defaultEmpty() {
        content.setEmptyView(findViewById(R.id.empty));
    }
    private void displayList () {
        adapter = new ArrayAdapter<String>(MainActivity.this, android.R.layout.simple_list_item_1, toDoList);
        content.setAdapter(adapter);
        content.setOnItemLongClickListener(new AdapterView.OnItemLongClickListener() {
            @Override
            public boolean onItemLongClick(AdapterView<?> parent, View view, int position, long id) {
                Log.d(TAG, "long click " + position);
                toDoList.remove(position);
                adapter.notifyDataSetChanged();
                return false;
            }
        });
        content.setSelection(adapter.getCount() - 1);
    }

    public void submitItem(View view) {
        TextView textView = (TextView)findViewById(R.id.enter_item);
        String itemName = textView.getText().toString();
        if (!itemName.equals("")) {
            toDoList.add(itemName);
            textView.setText("");
            displayList();
        }
    }
}
